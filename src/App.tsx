import React, { useState } from 'react';
import { Send } from 'lucide-react';
import PQRSFForm from './components/PQRSFForm';
import PQRSFList from './components/PQRSFList';

function App() {
  const [submissions, setSubmissions] = useState<PQRSFSubmission[]>([]);

  const handleSubmit = (submission: PQRSFSubmission) => {
    setSubmissions([...submissions, submission]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">PQRSF System</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <PQRSFForm onSubmit={handleSubmit} />
        <PQRSFList submissions={submissions} />
      </div>
    </div>
  );
}

export default App;