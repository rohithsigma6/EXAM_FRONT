import React, { useState } from 'react';
import Sidebar from '../AdminNav';
import TestTable from './TestTable';

const DisplayTests = () => {
  // Sample test data (replace this with data from your API)
  const [testData, setTestData] = useState([
    {
      id: 1,
      name: 'Test 1',
      description: 'This is Test 1',
      numQuestions: 10,
      numPeopleAttempted: 20,
    },
    {
      id: 2,
      name: 'Test 2',
      description: 'This is Test 2',
      numQuestions: 15,
      numPeopleAttempted: 30,
    },
    // Add more test data as needed
  ]);

  const handleDeleteTest = (testId) => {
    setTestData((prevTestData) =>
      prevTestData.filter((test) => test.id !== testId)
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">Test Management</h1>
        <TestTable testData={testData} onDelete={handleDeleteTest} />
      </div>
    </div>
  );
};

export default DisplayTests;
