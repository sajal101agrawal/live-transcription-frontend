// src/pages/TranscriptPage.jsx
import React, { useState } from 'react';

const TranscriptPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState([]);

  const handleStartStopRecording = () => {
    setIsRecording(!isRecording);
    // Logic to start/stop recording and fetching transcript data should go here
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Live Transcription</h2>
      <button
        onClick={handleStartStopRecording}
        className={`px-4 py-2 rounded-lg shadow-md text-white ${
          isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        } transition duration-300`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md max-h-96 overflow-y-auto">
        {transcript.length > 0 ? (
          transcript.map((line, index) => <p key={index} className="text-sm">{line}</p>)
        ) : (
          <p className="text-gray-500">No transcription data available.</p>
        )}
      </div>
    </div>
  );
};

export default TranscriptPage;
