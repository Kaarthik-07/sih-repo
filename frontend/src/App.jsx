import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage'
import { ToastContainer,toast } from 'react-toastify';
import CreateAccount from './CreateAccount'
import ForgotPassword from './components/ForgotPassword';
import OtpPage from './components/OtpCheck'
import Quiz from './components/Quiz';
import MainPage from './MainPage';
import Team from './components/Team';
import NotFound from './components/notfound';
import ContactUs from './components/contactUs';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/create' element={<CreateAccount/>}/>
      <Route path = '/team/main' element={<MainPage/>}/>
      <Route path = '/main/team' element={<Team/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/otp' element={<OtpPage/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path ='/team' element={<Team/>}/>
      <Route path ='/games' element= {<NotFound/>}/>
      <Route path='/help' element = {<NotFound/>}/>
      <Route path='/contact' element = {<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;