// src/pages/ReportPage.jsx
import React from 'react';

const ReportPage = () => {
  const handlePrint = () => {
    window.print(); // Basic print functionality, can be enhanced.
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Session Report</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {/* Content of the report */}
        <h3 className="text-xl font-bold">Conversation Summary</h3>
        <p className="mt-2 text-gray-600">Detailed analysis and summary of the conversation will go here.</p>
      </div>
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
      >
        Print Report
      </button>
    </div>
  );
};

export default ReportPage;
