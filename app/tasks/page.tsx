export default function TaskManager() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-blue-700 text-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold">Task Management</h1>
        <p className="text-sm opacity-90">Prevent task leakage across shifts</p>
      </header>

      <main className="flex-1 px-6 py-6 space-y-10">

        {/* Add Task */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">Add New Task</h2>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Task Description</label>
            <textarea
              rows={2}
              placeholder="e.g. Bloods to be taken, wound review needed..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Priority</label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600">
                <option value="">Select priority...</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Owner</label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600">
                <option value="">Select owner...</option>
                <option>Incoming Shift</option>
                <option>Named Nurse</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Due Time</label>
              <input
                type="datetime-local"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600"
              />
            </div>

          </div>

          <button className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition">
            Add Task
          </button>
        </section>

        {/* Active Tasks */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Tasks</h2>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-500 text-sm italic">
            No active tasks.
          </div>
        </section>

        {/* Overdue Tasks */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Overdue Tasks</h2>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-500 text-sm italic">
            No overdue tasks.
          </div>
        </section>

        {/* Completed Tasks */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Completed Tasks</h2>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-500 text-sm italic">
            No completed tasks.
          </div>
        </section>

      </main>
    </div>
  );
}
