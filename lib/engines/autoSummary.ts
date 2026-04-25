// /lib/engines/autoSummary.ts

import type { ClinicalTask } from "@/lib/types/task";

export interface RiskSignal {
  type: "HighRisk" | "Deterioration" | "Escalation" | "UnresolvedIssue";
  message: string;
}

export interface AutoSummaryOutput {
  riskSignals: RiskSignal[];
  extractedTasks: ClinicalTask[];
  keyChanges: string[];
}

export function generateAutoSummary(
  text: string,
  patientName: string,
  bed: string
): AutoSummaryOutput {
  const riskSignals: RiskSignal[] = [];
  const extractedTasks: ClinicalTask[] = [];
  const keyChanges: string[] = [];

  // --- 1. Detect risk keywords ---
  const highRiskPatterns = [/sepsis/i, /critical/i, /unstable/i, /collapse/i];
  const deteriorationPatterns = [/worsening/i, /deteriorat/i, /increasing/i];
  const escalationPatterns = [/escalate/i, /doctor/i, /review urgently/i];
  const unresolvedPatterns = [/not done/i, /pending/i, /awaiting/i];

  if (highRiskPatterns.some((p) => p.test(text))) {
    riskSignals.push({
      type: "HighRisk",
      message: "High‑risk indicators detected in summary"
    });
  }

  if (deteriorationPatterns.some((p) => p.test(text))) {
    riskSignals.push({
      type: "Deterioration",
      message: "Possible clinical deterioration detected"
    });
  }

  if (escalationPatterns.some((p) => p.test(text))) {
    riskSignals.push({
      type: "Escalation",
      message: "Escalation trigger identified"
    });
  }

  if (unresolvedPatterns.some((p) => p.test(text))) {
    riskSignals.push({
      type: "UnresolvedIssue",
      message: "Unresolved issues from previous shift detected"
    });
  }

  // --- 2. Extract tasks ---
  const taskPatterns = [
    { regex: /bloods/i, description: "Bloods requested" },
    { regex: /review/i, description: "Review required" },
    { regex: /monitor/i, description: "Monitoring required" },
    { regex: /repeat/i, description: "Repeat test required" },
    { regex: /follow[- ]?up/i, description: "Follow-up required" },
    { regex: /check/i, description: "Check required" },
    { regex: /administer/i, description: "Medication administration required" }
  ];

  for (const pattern of taskPatterns) {
    if (pattern.regex.test(text)) {
      extractedTasks.push({
        id: crypto.randomUUID(),
        patientName,
        bed,
        description: pattern.description,
        priority: "Medium",
        owner: "Incoming Shift",
        due: new Date().toISOString(),
        status: "Pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        shiftCreated: "",
        shiftCarriedOver: 0
      });
    }
  }

  // --- 3. Detect key changes ---
  const changePatterns = [
    { regex: /improv/i, label: "Improvement noted" },
    { regex: /worsen/i, label: "Worsening condition" },
    { regex: /new/i, label: "New clinical information" },
    { regex: /increasing/i, label: "Increasing symptoms" }
  ];

  for (const pattern of changePatterns) {
    if (pattern.regex.test(text)) {
      keyChanges.push(pattern.label);
    }
  }

  return {
    riskSignals,
    extractedTasks,
    keyChanges
  };
}
