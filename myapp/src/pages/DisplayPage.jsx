import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayPage = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Logo */}
      <img src="/path/to/your/logo.png" alt="Logo" className="w-20 h-20 mb-4" />

      {/* Sign In/Register Buttons */}
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" 
        onClick={(e)=>{
            e.preventDefault()
            navigate("/login")
        }}>
          Sign In
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          onClick={(e)=>{
            e.preventDefault()
            navigate("/register")
        }}>
          Register
        </button>
      </div>

      {/* About Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">About Exam Portal</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque mi nec
          pellentesque blandit. Duis facilisis mauris vitae mauris ultricies, non mattis elit
          suscipit. Sed ultrices, risus nec scelerisque tincidunt, massa nibh elementum nisi, ac
          auctor libero eros eget elit.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-32 object-cover rounded" />
        <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-32 object-cover rounded" />
        <img src="/path/to/image3.jpg" alt="Image 3" className="w-full h-32 object-cover rounded" />
      </div>
    </div>
  );
};

export default DisplayPage;
