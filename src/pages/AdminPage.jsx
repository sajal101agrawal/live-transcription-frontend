// src/pages/AdminPage.jsx
import React, { useState } from 'react';

const AdminPage = () => {
  const [scenarios, setScenarios] = useState([
    'Scenario 1', 'Scenario 2', 'Scenario 3', 'Scenario 4'
  ]);
  const [newScenario, setNewScenario] = useState('');

  const handleAddScenario = () => {
    if (newScenario.trim()) {
      setScenarios([...scenarios, newScenario]);
      setNewScenario('');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-2">Manage Scenarios</h3>
        <ul className="list-disc ml-5 mb-4">
          {scenarios.map((scenario, index) => (
            <li key={index} className="text-gray-700">{scenario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newScenario}
          onChange={(e) => setNewScenario(e.target.value)}
          placeholder="New Scenario Title"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <button
          onClick={handleAddScenario}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Add Scenario
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
