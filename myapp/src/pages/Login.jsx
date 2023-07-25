import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { LoginUser } from '../apiCalls/users';
const Login = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await LoginUser(formData)
    console.log(response)
    if(response.success){
        localStorage.setItem("token",response.token)
        navigate("/home")
    }
    else{
        alert("Invalid user/password")
    }
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form (add your logic here)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <div className="flex justify-center mb-4">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded-full border-2 border-blue-500"
         
            onClick={(e)=>{
                e.preventDefault()
                navigate("/")
            }}/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
           
          </div>
        </form>
        <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
           onClick={(e)=>{
            e.preventDefault()
            navigate('/register')
           }} >
              Not a member? Register
            </a>

      </div>
    </div>
  );
};

export default Login;
