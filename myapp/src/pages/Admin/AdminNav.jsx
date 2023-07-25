import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-800 text-white w-64 p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-2">
        <li className="py-2 hover:bg-gray-700 cursor-pointer" onClick={(e)=>{
            e.preventDefault()
            navigate("/addtest")
        }}>Add Test</li>
        <li className="py-2 hover:bg-gray-700 cursor-pointer"
        onClick={(e)=>{
          e.preventDefault()
          navigate("/manageusers")
      }}>Manage Users</li>
        <li className="py-2 hover:bg-gray-700 cursor-pointer" onClick={(e)=>{
            e.preventDefault()
            navigate("/managetests")
        }}>Manage Tests</li>
      </ul>
    </div>
  );
};

export default Sidebar;
