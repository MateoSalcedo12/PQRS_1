import React from 'react';

interface PQRSFListProps {
  submissions: PQRSFSubmission[];
}

const PQRSFList: React.FC<PQRSFListProps> = ({ submissions }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>
      {submissions.length === 0 ? (
        <p className="text-gray-500">No submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {submissions.map((submission) => (
            <li key={submission.id} className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-blue-600">{submission.type}</span>
                <span className="text-sm text-gray-500">
                  {new Date(submission.date).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-700">{submission.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PQRSFList;