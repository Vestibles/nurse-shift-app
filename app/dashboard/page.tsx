"use client";

import { useHandover } from "../context/HandoverContext";   // ✅ REQUIRED ADDITION

export default function WardDashboard() {

  const { summaries } = useHandover();                      // ✅ REQUIRED ADDITION

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-blue-700 text-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold">Ward Risk Overview</h1>
        <p className="text-sm opacity-90">Real‑time shift safety summary</p>
      </header>

      <main className="flex-1 px-6 py-6 space-y-10">

        {/* Shift Overview */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Shift Overview</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Shift</p>
              <p className="font-medium">Day</p>
            </div>
            <div>
              <p className="text-gray-500">Nurse in Charge</p>
              <p className="font-medium">—</p>
            </div>
            <div>
              <p className="text-gray-500">Patients</p>
              <p className="font-medium">—</p>
            </div>
            <div>
              <p className="text-gray-500">Updated</p>
              <p className="font-medium">Just now</p>
            </div>
          </div>
        </section>

        {/* Risk Summary Cards */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Risk Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">High‑Risk Patients</p>
              <p className="text-3xl font-bold text-red-600 mt-2">0</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">Deteriorating (24h)</p>
              <p className="text-3xl font-bold text-orange-500 mt-2">0</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">Critical Tasks</p>
              <p className="text-3xl font-bold text-yellow-500 mt-2">0</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">Staffing Pressure</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">Normal</p>
            </div>

          </div>
        </section>

        {/* Patient Risk Table */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Patient Risk Overview</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left">Patient</th>
                  <th className="p-3 text-left">Bed</th>
                  <th className="p-3 text-left">Risk</th>
                  <th className="p-3 text-left">Key Changes</th>
                  <th className="p-3 text-left">Tasks</th>
                  <th className="p-3 text-left">Escalation</th>
                </tr>
              </thead>
              <tbody>
                {summaries.length === 0 ? (
                  <tr>
                    <td className="p-3 text-gray-500 italic" colSpan={6}>
                      No patients recorded yet.
                    </td>
                  </tr>
                ) : (
                  summaries.map((entry, i) => (
                    <tr key={i}>
                      <td className="p-3">{entry.patientName}</td>
                      <td className="p-3">{entry.bedNumber}</td>
                      <td className="p-3">{entry.riskLevel}</td>
                      <td className="p-3">{entry.keyChanges}</td>
                      <td className="p-3">{entry.tasks}</td>
                      <td className="p-3">{entry.shift}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Continuity Alerts */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Continuity Alerts</h2>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-500 text-sm italic">
            No unresolved issues from previous shifts.
          </div>
        </section>

      </main>
    </div>
  );
}
