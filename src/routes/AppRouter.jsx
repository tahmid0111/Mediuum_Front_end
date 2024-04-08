import React from 'react'
import { Route, Routes } from 'react-router-dom'
// importing pages
import HomePage from '../pages/main/HomePage'
import RegistrationPage from '../pages/user/RegistrationPage';
import SendEmailPage from '../pages/otp/SendEmailPage';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/sendEmail" element={<SendEmailPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
