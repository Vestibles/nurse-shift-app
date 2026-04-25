export default function PatientTimeline() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-blue-700 text-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold">Patient Timeline</h1>
        <p className="text-sm opacity-90">Clinical progression & shift continuity</p>
      </header>

      <main className="flex-1 px-6 py-6 space-y-10">

        {/* Patient Summary */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Patient Overview</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">—</p>
            </div>
            <div>
              <p className="text-gray-500">Bed</p>
              <p className="font-medium">—</p>
            </div>
            <div>
              <p className="text-gray-500">Risk Level</p>
              <p className="font-medium text-red-600">—</p>
            </div>
            <div>
              <p className="text-gray-500">Last Updated</p>
              <p className="font-medium">—</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Timeline</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="space-y-8">

              {/* Example Empty State */}
              <div className="text-gray-500 text-sm italic">
                No clinical events recorded yet.
              </div>

              {/* Example Event Structure (commented for reference)
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-500">12:45 — 24 Apr 2026</p>
                  <p className="font-medium text-gray-900">Deterioration Noted</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Increased respiratory rate, NEWS score rising.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                    High Risk
                  </span>
                </div>
              </div>
              */}

            </div>
          </div>
        </section>

        {/* Outstanding Tasks */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Outstanding Tasks</h2>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-500 text-sm italic">
            No outstanding tasks.
          </div>
        </section>

        {/* Continuity Intelligence */}
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
