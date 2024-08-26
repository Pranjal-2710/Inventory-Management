import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InventoryManagement from './components/InventoryManagement';
import ReorderManagement from './components/ReorderManagement';
import AlertsNotifications from './components/AlertsNotifications';


const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <header className="bg-gray-800 shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-teal-400">
              <a href="/">Hospital Management</a>
            </h1>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-200 hover:text-teal-300 transition duration-300"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/inventory"
                  className="text-gray-200 hover:text-teal-300 transition duration-300"
                >
                  Inventory Management
                </a>
              </li>
              <li>
                <a
                  href="/reorder"
                  className="text-gray-200 hover:text-teal-300 transition duration-300"
                >
                  Reorder Management
                </a>
              </li>
              <li>
                <a
                  href="/alerts"
                  className="text-gray-200 hover:text-teal-300 transition duration-300"
                >
                  Alerts & Notifications
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="p-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/reorder" element={<ReorderManagement />} />
            <Route path="/alerts" element={<AlertsNotifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;