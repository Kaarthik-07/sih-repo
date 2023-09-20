import React, { useState } from 'react'
import { toast , ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const Navigate = useNavigate();
    const [email,setEmail] = useState('');
    const handleForgot = (e) =>{
        e.preventDefault();
        if(email.includes('@gmail.com')){
            toast.success('OTP shared successfully');
            Navigate('/otp');
        } else{
            toast.error("Invalid email address");
        }
    };
  return (
    <>
    <form className="w-full" onSubmit={(e)=>handleForgot(e)}>
    <div className="bg-gray-100 flex justify-center items-center h-screen">
         <div className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
          <input
                type="text"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-black text-white py-2 px-6 rounded-md mr-4 mt-6 hover:bg-green-600" type='submit'>
                Send OTP
              </button>
              
        </div>
    </div>
    </form>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
)
  
}

export default ForgotPassword;