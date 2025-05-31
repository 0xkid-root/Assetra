export default function Overview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          <div className="text-lg font-semibold">Total Assets</div>
          <div className="text-2xl font-bold mt-2">$2,400,000</div>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          <div className="text-lg font-semibold">Active Users</div>
          <div className="text-2xl font-bold mt-2">12,500</div>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          <div className="text-lg font-semibold">Revenue</div>
          <div className="text-2xl font-bold mt-2">$850,000</div>
        </div>
      </div>
    </div>
  );
} 