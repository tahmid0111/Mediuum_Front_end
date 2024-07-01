import React from "react";
import { Route, Routes } from "react-router-dom";
// importing pages

import SendEmailPage from "../pages/otp/SendEmailPage";
import VerifyOtpPage from "./../pages/otp/VerifyOtpPage";
import HomePage from "../pages/front/HomePage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import LoginPage from "../pages/registration/LoginPage";
import BlogByCategory from "../pages/front/BlogByCategory";
import TopicsByCategory from "./../components/blogpage/TopicsByCategory";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/sendEmail/:task" element={<SendEmailPage />} />
        <Route path="/verifyOTP/:task" element={<VerifyOtpPage />} />

        <Route
          path="/blogByCategory/:categoryID"
          element={<BlogByCategory />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
