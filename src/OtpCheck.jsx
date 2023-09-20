import React, { useState } from 'react';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleOtpChange = (e) => {
    const enteredOtp = e.target.value;
    // Ensure the entered OTP is numeric and has a length of 6
    if (/^\d{6}$/.test(enteredOtp)) {
      setOtp(enteredOtp);
      setMessage(''); // Clear any error message
    } else {
      toast.error('Please enter a valid 6-digit OTP.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform OTP validation logic here (e.g., compare with the expected OTP)
    // For simplicity, we'll just display a success message
    toast.success('OTP verification successful!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4 text-center">Enter a 6-digit OTP</h1>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-4">
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 w-20 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-green-600"onClick={()=> Navigate('/otp')}
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
