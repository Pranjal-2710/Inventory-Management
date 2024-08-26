import React, { useState } from 'react';

const initialInventory = [
  { id: 1, name: 'Med A', category: 'Medicines', quantity: 100, lastUpdated: '08/24/24' },
  { id: 2, name: 'Cons B', category: 'Consumables', quantity: 50, lastUpdated: '08/24/24' }
];

const InventoryManagement = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [editingItem, setEditingItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState('');

  const handleEdit = (item) => {
    setEditingItem(item);
    setNewQuantity(item.quantity);
  };

  const handleUpdate = (id) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, quantity: newQuantity, lastUpdated: new Date().toLocaleDateString() } : item
    ));
    setEditingItem(null);
    setNewQuantity('');
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-teal-400">Inventory Management</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Current Inventory</h2>
        <table className="w-full mt-4 border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="border-b border-gray-700 py-3 text-left text-gray-300">Name</th>
              <th className="border-b border-gray-700 py-3 text-left text-gray-300">Category</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Quantity</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Last Updated</th>
              <th className="border-b border-gray-700 py-3 text-center text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td className="border-b border-gray-700 py-3 text-left">{item.name}</td>
                <td className="border-b border-gray-700 py-3 text-left">{item.category}</td>
                <td className="border-b border-gray-700 py-3 text-center">
                  {editingItem?.id === item.id ? (
                    <input
                      type="number"
                      value={newQuantity}
                      onChange={(e) => setNewQuantity(e.target.value)}
                      className="bg-gray-700 text-gray-200 px-2 py-1 rounded-lg w-full"
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td className="border-b border-gray-700 py-3 text-center">{item.lastUpdated}</td>
                <td className="border-b border-gray-700 py-3 text-center">
                  {editingItem?.id === item.id ? (
                    <button
                      onClick={() => handleUpdate(item.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;