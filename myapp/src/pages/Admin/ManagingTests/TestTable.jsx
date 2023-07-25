import React from 'react';

const TestTable = ({ testData, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Test Name</th>
            <th className="px-4 py-2 border">Test Description</th>
            <th className="px-4 py-2 border">Number of Questions</th>
            <th className="px-4 py-2 border">Number of People Attempted</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((test) => (
            <tr key={test.id}>
              <td className="px-4 py-2 border">{test.name}</td>
              <td className="px-4 py-2 border">{test.description}</td>
              <td className="px-4 py-2 border">{test.numQuestions}</td>
              <td className="px-4 py-2 border">{test.numPeopleAttempted}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => onDelete(test.id)}
                  className="bg-red-600 hover:bg-red-700 px-2 py-1 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
