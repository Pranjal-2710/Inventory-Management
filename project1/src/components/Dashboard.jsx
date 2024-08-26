import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-teal-400">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100">Total Medicines</h2>
          <p className="text-3xl font-bold text-gray-300">50</p>
          <p className="text-lg text-gray-400 mt-2">Medicines in Stock</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100">Total Consumables</h2>
          <p className="text-3xl font-bold text-gray-300">30</p>
          <p className="text-lg text-gray-400 mt-2">Consumables in Stock</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100">Low Stock Alerts</h2>
          <p className="text-3xl font-bold text-gray-300">5</p>
          <p className="text-lg text-gray-400 mt-2">Items Needing Attention</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100">Reorder Requests</h2>
          <p className="text-3xl font-bold text-gray-300">8</p>
          <p className="text-lg text-gray-400 mt-2">Pending Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;