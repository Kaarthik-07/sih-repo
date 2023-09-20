import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from '../frontend/LoginPage'
import { ToastContainer,toast } from 'react-toastify';
import CreateAccount from '../frontend/CreateAccount'
import ForgotPassword from '../frontend/ForgotPassword';
import OtpPage from './OtpCheck'
import ContactUs from '../frontend/contactUs'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/create' element={<CreateAccount/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/otp' element={<OtpPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;