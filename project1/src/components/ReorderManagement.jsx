import React, { useState } from 'react';

const initialReorders = [
  { id: 1, item: 'Med A', quantity: 10, status: 'Pending' },
  { id: 2, item: 'Cons B', quantity: 5, status: 'Pending' }
];

const ReorderManagement = () => {
  const [reorders, setReorders] = useState(initialReorders);

  const handleApprove = (id) => {
    setReorders(reorders.map(reorder =>
      reorder.id === id ? { ...reorder, status: 'Approved' } : reorder
    ));
  };

  const handleReject = (id) => {
    setReorders(reorders.map(reorder =>
      reorder.id === id ? { ...reorder, status: 'Rejected' } : reorder
    ));
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-teal-400">Reorder Management</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Reorder Requests</h2>
        <table className="w-full mt-4 border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="border-b border-gray-700 py-3 text-left text-gray-300">Item</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Quantity</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Status</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reorders.map(reorder => (
              <tr key={reorder.id}>
                <td className="border-b border-gray-700 py-3 text-left">{reorder.item}</td>
                <td className="border-b border-gray-700 py-3 text-center">{reorder.quantity}</td>
                <td className="border-b border-gray-700 py-3 text-center">{reorder.status}</td>
                <td className="border-b border-gray-700 py-3 text-center">
                  <button
                    onClick={() => handleApprove(reorder.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(reorder.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    Reject
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

export default ReorderManagement;