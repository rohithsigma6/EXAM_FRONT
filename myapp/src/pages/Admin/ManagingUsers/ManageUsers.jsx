import React, { useState } from 'react';
import Sidebar from '../AdminNav';
import UserTable from './UserTable';

const ManageUsers = () => {
  // Sample user data (replace this with data from your API)
  const [userData, setUserData] = useState([
    {
      id: 1,
      userName: 'user1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: '********',
    },
    {
      id: 2,
      userName: 'user2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      password: '********',
    },
    // Add more user data as needed
  ]);

  const handleDeleteUser = (userId) => {
    setUserData((prevUserData) =>
      prevUserData.filter((user) => user.id !== userId)
    );
  };

  const handleUpdateUser = (userId, updatedData) => {
    setUserData((prevUserData) =>
      prevUserData.map((user) => {
        if (user.id === userId) {
          return { ...user, ...updatedData };
        }
        return user;
      })
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <UserTable
          userData={userData}
          onDelete={handleDeleteUser}
          onUpdate={handleUpdateUser}
        />
      </div>
    </div>
  );
};

export default ManageUsers;
