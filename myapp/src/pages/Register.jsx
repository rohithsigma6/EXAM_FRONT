import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.username) {
            errors.username = 'Username is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {

            try {
                const postData = async () => {
                    try{
                        const response = await axios.post('http://localhost:1234/v1/register', formData)
                        console.log(response)
                        if (response) {
                            setSuccessMessage('Registration successful!');
                            setFormData({
                                username: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                            });
                        }

                    }catch(err){
                        setSuccessMessage('Email already in use!');
                    }
                 
                }
                postData()
            }
            catch (err) {
                setSuccessMessage('Email already in use!');
            }
        }
    };

    const handlePopupClose = () => {
        setSuccessMessage('');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 py-6 w-96">
                <div className="flex justify-center mb-4">
                    <img
                        src="/path/to/your/logo.png"
                        alt="Logo"
                        className="w-16 h-16 rounded-full border-2 border-blue-500"
                        onClick={(e) => {
                            e.preventDefault()
                            navigate("/")
                        }} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className={`${formErrors.username ? 'border-red-500' : 'border-gray-300'
                                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        />
                        {formErrors.username && (
                            <p className="text-red-500 text-xs italic">{formErrors.username}</p>
                        )}
                    </div>
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
                            className={`${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        />
                        {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`${formErrors.password ? 'border-red-500' : 'border-gray-300'
                                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        />
                        {formErrors.password && (
                            <p className="text-red-500 text-xs italic">{formErrors.password}</p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className={`${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        />
                        {formErrors.confirmPassword && (
                            <p className="text-red-500 text-xs italic">{formErrors.confirmPassword}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {successMessage && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    <div className="bg-white rounded-lg p-8 z-10">
                        <h2 className="text-lg font-semibold mb-4"></h2>
                        <p className="mb-4">{successMessage}</p>
                        <button
                            onClick={handlePopupClose}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
