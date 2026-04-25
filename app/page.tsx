export default function HandoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-blue-700 text-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold">Shift Handover Summary</h1>
        <p className="text-sm opacity-90">30‑second clinical risk overview</p>
      </header>

      <main className="flex-1 px-6 py-6 space-y-8">

        {/* Handover Form */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">New Entry</h2>

          {/* Nurse Info */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Patient Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input
                type="text"
                placeholder="Enter patient name..."
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Bed Number</label>
              <input
                type="text"
                placeholder="e.g. B12"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Risk Indicators */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-800">Risk Indicators</h3>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Current Risk Level</label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600">
                <option value="">Select risk level...</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Key Changes Since Last Shift</label>
              <textarea
                rows={2}
                placeholder="What has changed clinically?"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* SBAR */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-800">SBAR Summary</h3>

            <textarea
              rows={4}
              placeholder="Short SBAR summary..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Tasks */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-800">Outstanding Tasks</h3>

            <textarea
              rows={2}
              placeholder="List tasks that must be completed..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Shift */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Shift</label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600">
              <option value="">Select shift...</option>
              <option>Day</option>
              <option>Night</option>
            </select>
          </div>

          <button className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition">
            Save Summary
          </button>
        </section>

        {/* Recent */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Summaries</h2>
          <div className="text-gray-500 text-sm italic">
            No entries yet.
          </div>
        </section>

      </main>
    </div>
  );
}
