import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccountPage = () => {
  const [name, setName] = useState('');
  const [parentsNumber, setParentsNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Validate the form data (e.g., check if email is valid, password requirements are met, etc.)
    // If validation passes, you can perform account creation logic here
    // For simplicity, we'll just display a success message here
    toast.success('Account created successfully!');
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 lg:w-2/5 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
          <form className="w-full" onSubmit={handleCreateAccount}>
            <div className="mb-4 w-full">
              <label htmlFor="name" className="block text-gray-600">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="parentsNumber" className="block text-gray-600">Parents' Number:</label>
              <input
                type="tel"
                id="parentsNumber"
                name="parentsNumber"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter parents' number"
                value={parentsNumber}
                onChange={(e) => setParentsNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="email" className="block text-gray-600">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="password" className="block text-gray-600">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 w-full">
              <button type="submit" className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-blue-600">Create Account</button>
            </div>
          </form>
          <div className="text-center w-full">
            <p className="text-gray-600 mt-2">Or sign up with</p>
            <div className="mt-2">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600"
                onClick={() => {
                  // Perform Google signup logic here
                  toast.success('Signed up with Google successfully!');
                }}
              >
                Google
              </button>
              {/* Add more social signup buttons as needed */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default CreateAccountPage;
