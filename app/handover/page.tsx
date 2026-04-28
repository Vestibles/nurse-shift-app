"use client";

import { useState } from "react";
import { useHandover } from "../context/HandoverContext";


// ------------------------------------------------------------
// ## 📝 HANDOVER PAGE — saves entries to global store
// ------------------------------------------------------------
export default function HandoverPage() {

  const { summaries, setSummaries } = useHandover();

  const [nurseName, setNurseName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [bedNumber, setBedNumber] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [keyChanges, setKeyChanges] = useState("");
  const [sbar, setSbar] = useState("");
  const [tasks, setTasks] = useState("");
  const [shift, setShift] = useState("");

  // ------------------------------------------------------------
  // ## 💾 SAVE HANDLER — writes form data to global store
  // ------------------------------------------------------------
  function handleSaveSummary() {
    const newEntry = {
      nurseName,
      patientName,
      bedNumber,
      riskLevel,
      keyChanges,
      sbar,
      tasks,
      shift,
      timestamp: new Date().toLocaleString(),
    };

    setSummaries((prev) => [newEntry, ...prev]);

    setNurseName("");
    setPatientName("");
    setBedNumber("");
    setRiskLevel("");
    setKeyChanges("");
    setSbar("");
    setTasks("");
    setShift("");
  }

  // ------------------------------------------------------------
  // ## 🖥️ UI — form + recent summaries
  // ------------------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* # HEADER */}
      <header className="bg-blue-700 text-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold">Shift Handover Summary</h1>
        <p className="text-sm opacity-90">30‑second clinical risk overview</p>
      </header>

      <main className="flex-1 px-6 py-6 space-y-8">

        {/* # FORM */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">

          <h2 className="text-lg font-semibold text-gray-800">New Entry</h2>

          <input
            className="w-full border p-2 rounded-md placeholder:text-gray-700 text-gray-800"
            placeholder="Your name..."
            value={nurseName}
            onChange={(e) => setNurseName(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded-md placeholder:text-gray-700 text-gray-800"
            placeholder="Patient name..."
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded-md placeholder:text-gray-700 text-gray-800"
            placeholder="Bed number..."
            value={bedNumber}
            onChange={(e) => setBedNumber(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded-md text-gray-800"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
          >
            <option value="">Select risk level...</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <textarea
            className="w-full border p-2 rounded-md placeholder:text-gray-700 text-gray-800"
            rows={2}
            placeholder="Key changes..."
            value={keyChanges}
            onChange={(e) => setKeyChanges(e.target.value)}
          />
          <textarea
            className="w-full border p-2 rounded-md placeholder:text-gray-700 text-gray-800"
            rows={3}
            placeholder="SBAR summary..."
            value={sbar}
            onChange={(e) => setSbar(e.target.value)}
          />
          <textarea
            className="w-full border p-2 rounded-md placeholder:text-gray-700 text-gray-800"
            rows={2}
            placeholder="Outstanding tasks..."
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded-md text-gray-800"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
          >
            <option value="">Select shift...</option>
            <option>Day</option>
            <option>Night</option>
          </select>

          <button
            onClick={handleSaveSummary}
            className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800"
          >
            Save Summary
          </button>
        </section>

        {/* # RECENT */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Summaries</h2>

          {summaries.length === 0 ? (
            <p className="text-gray-500 italic">No entries yet.</p>
          ) : (
            summaries.map((entry, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border shadow-sm mb-3">
                <p className="font-semibold">{entry.patientName} — {entry.bedNumber}</p>
                <p>Nurse: {entry.nurseName}</p>
                <p>Risk: {entry.riskLevel}</p>
                <p>Shift: {entry.shift}</p>
                <p>Key Changes: {entry.keyChanges}</p>
                <p>SBAR: {entry.sbar}</p>
                <p>Tasks: {entry.tasks}</p>
                <p className="text-xs text-gray-400 mt-2">{entry.timestamp}</p>
              </div>
            ))
          )}
        </section>

      </main>
    </div>
  );
}
