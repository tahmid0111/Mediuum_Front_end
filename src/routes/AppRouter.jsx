import { Route, Routes } from "react-router-dom";
// importing pages

import SendEmailPage from "../pages/otp/SendEmailPage";
import VerifyOtpPage from "./../pages/otp/VerifyOtpPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import LoginPage from "../pages/registration/LoginPage";
import BlogByCategory from "../pages/blogs/BlogByCategory";
import ProfilePage from "../pages/profile/ProfilePage";
import HomePage from "../pages/homepage/HomePage";
import Guide from "../pages/homepage/Guide";
import Faq from "../pages/homepage/Faq";
import LibraryPage from "../pages/blogs/LibraryPage";
import WriterProfilePage from "../pages/profile/WriterProfilePage";
import NotificationPage from "../pages/blogs/NotificationPage";
import SingleBlogPage from "../pages/blogs/SingleBlogPage";
import SingleUserPage from "../pages/profile/SingleUserPage";
import SingleTopicPage from "../pages/blogs/SingleTopicPage";

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
        <Route path="/writerProfile" element={<WriterProfilePage />} />
        <Route path="/singleUser/:userID" element={<SingleUserPage />} />
        // Blog Page==============
        <Route
          path="/blogByCategory/:categoryID"
          element={<BlogByCategory />}
        />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/singleBlog/:blogID" element={<SingleBlogPage />} />
        <Route path="/singleTopic/:topicID" element={<SingleTopicPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
