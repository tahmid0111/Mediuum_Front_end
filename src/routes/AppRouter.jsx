import { Route, Routes } from "react-router-dom";
// importing pages

import SendEmailPage from "../pages/otp/SendEmailPage";
import VerifyOtpPage from "./../pages/otp/VerifyOtpPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import LoginPage from "../pages/registration/LoginPage";
import BlogByCategory from "../pages/BlogByCategory";
import ProfilePage from './../pages/ProfilePage';
import HomePage from "../pages/homepage/HomePage";
import Guide from "../pages/homepage/Guide";
import Faq from "../pages/homepage/Faq";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/sendEmail/:task" element={<SendEmailPage />} />
        <Route path="/verifyOTP/:task" element={<VerifyOtpPage />} />

        <Route path="/profile/:email" element={<ProfilePage />} />

        <Route
          path="/blogByCategory/:categoryID"
          element={<BlogByCategory />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
