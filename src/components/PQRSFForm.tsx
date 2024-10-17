import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface PQRSFFormProps {
  onSubmit: (submission: PQRSFSubmission) => void;
}

const PQRSFForm: React.FC<PQRSFFormProps> = ({ onSubmit }) => {
  const [type, setType] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type && description) {
      onSubmit({
        id: Date.now(),
        type,
        description,
        date: new Date().toISOString(),
      });
      setType('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a type</option>
          <option value="Petition">Petition</option>
          <option value="Complaint">Complaint</option>
          <option value="Claim">Claim</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Congratulation">Congratulation</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
      >
        <Send className="mr-2" size={18} />
        Submit
      </button>
    </form>
  );
};

export default PQRSFForm;