import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const OtpPage = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState('');

  const handleOtpChange = (e, index) => {
    const enteredOtp = e.target.value;
    // Ensure the entered OTP is numeric
    if (/^\d*$/.test(enteredOtp)) {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index] = enteredOtp;
      setOtpValues(updatedOtpValues);
      setMessage(''); // Clear any error message
    } else {
      toast.error('Please enter valid numeric OTP.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine the OTP values to form the complete OTP
    const completeOtp = otpValues.join('');

    // Perform OTP validation logic here (e.g., compare with the expected OTP)
    // For simplicity, we'll just display a success message
    if (completeOtp === '123456') {
      toast.success('OTP verification successful!');
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">Enter a 6-digit OTP</h1>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-4 flex justify-center">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                className="border border-gray-300 rounded-md py-2 px-3 w-12 mx-1 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="0"
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
                maxLength={1}
                required
              />
            ))}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md w-64 hover:bg-green-600"
            >
              Verify OTP
            </button>
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
