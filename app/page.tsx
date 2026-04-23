"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [patient, setPatient] = useState("");
  const [notes, setNotes] = useState("");
  const [shift, setShift] = useState("Day");
  const [priority, setPriority] = useState("Normal");
  const [entries, setEntries] = useState<any[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("handoverEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("handoverEntries", JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newEntry = {
      patient,
      notes,
      shift,
      priority,
      time: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);

    setPatient("");
    setNotes("");
    setShift("Day");
    setPriority("Normal");
  };

  return (
    <main style={{ padding: "16px", maxWidth: "500px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Nurse Handover</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          <option>Day</option>
          <option>Night</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          <option>Normal</option>
          <option>Urgent</option>
        </select>

        <button style={{ width: "100%", padding: "12px" }}>
          Save Handover
        </button>
      </form>

      <hr />

      <h3>Recent Handovers</h3>

      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        entries.map((entry, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: entry.priority === "Urgent" ? "#ffe5e5" : "#f9f9f9",
            }}
          >
            <strong>{entry.patient}</strong> ({entry.shift})  
            <div style={{ fontSize: "12px", color: "gray" }}>
              {entry.time}
            </div>
            <p>{entry.notes}</p>
          </div>
        ))
      )}
    </main>
  );
}