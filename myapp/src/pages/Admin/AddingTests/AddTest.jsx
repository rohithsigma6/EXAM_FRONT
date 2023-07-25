import React from 'react';
import Sidebar from '../AdminNav';
import TestForm from './TestForm';

const AddTest= () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">Add Test</h1>
        <TestForm />
      </div>
    </div>
  );
};

export default AddTest;
