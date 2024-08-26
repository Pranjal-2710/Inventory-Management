import React, { useState } from 'react';

const initialAlerts = [
  { id: 1, type: 'Low Stock', item: 'Cons B', quantity: 5, date: '08/24/24', status: 'Pending' },
  { id: 2, type: 'Expired', item: 'Med A', quantity: 2, date: '08/23/24', status: 'Pending' }
];

const AlertsNotifications = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleResolve = (id) => {
    setAlerts(alerts.map(alert =>
      alert.id === id ? { ...alert, status: 'Resolved' } : alert
    ));
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-teal-400">Alerts & Notifications</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Alerts</h2>
        <table className="w-full mt-4 border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="border-b border-gray-700 py-3 text-left text-gray-300">Type</th>
              <th className="border-b border-gray-700 py-3 text-left text-gray-300">Item</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Quantity</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Date</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Status</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(alert => (
              <tr key={alert.id}>
                <td className="border-b border-gray-700 py-3 text-left">{alert.type}</td>
                <td className="border-b border-gray-700 py-3 text-left">{alert.item}</td>
                <td className="border-b border-gray-700 py-3 text-center">{alert.quantity}</td>
                <td className="border-b border-gray-700 py-3 text-center">{alert.date}</td>
                <td className="border-b border-gray-700 py-3 text-center">{alert.status}</td>
                <td className="border-b border-gray-700 py-3 text-center">
                  <button
                    onClick={() => handleResolve(alert.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    Resolve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertsNotifications;