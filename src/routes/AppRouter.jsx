import { Route, Routes } from "react-router-dom";
// importing pages

import SendEmailPage from "../pages/otp/SendEmailPage";
import VerifyOtpPage from "./../pages/otp/VerifyOtpPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import LoginPage from "../pages/registration/LoginPage";
import BlogByCategory from "../pages/blogs/BlogByCategory";
import ProfilePage from '../pages/profile/ProfilePage';
import HomePage from "../pages/homepage/HomePage";
import Guide from "../pages/homepage/Guide";
import Faq from "../pages/homepage/Faq";

const AppRouter = () => {
  return (
    <>
      <Routes>
        // Home Page==============
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        // Email verification=====
        <Route path="/sendEmail/:task" element={<SendEmailPage />} />
        <Route path="/verifyOTP/:task" element={<VerifyOtpPage />} />
        // Profile Page===========
        <Route path="/profile" element={<ProfilePage />} />
        // Blog Page==============
        <Route
          path="/blogByCategory/:categoryID"
          element={<BlogByCategory />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
