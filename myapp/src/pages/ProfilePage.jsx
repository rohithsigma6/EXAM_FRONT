import React from 'react';

const ProfilePage = () => {
  // Dummy user data (replace with actual user data from the backend)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    gender: 'Male',
    address: '123 Main Street, City, Country',
    profileImage: 'https://via.placeholder.com/150', // Replace with the URL of the user's profile image
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <img
                className="w-16 h-16 rounded-full flex-shrink-0"
                src={user.profileImage}
                alt="User Profile"
              />
              <div>
                <h1 className="text-gray-600">{user.name}</h1>
                <h3 className="text-gray-400">{user.email}</h3>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center justify-between space-x-2">
                  <span className="font-semibold">Age:</span>
                  <span>{user.age}</span>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <span className="font-semibold">Gender:</span>
                  <span>{user.gender}</span>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <span className="font-semibold">Address:</span>
                  <span>{user.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
