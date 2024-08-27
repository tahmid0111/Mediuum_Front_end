import React from "react";
import Header from "../../components/shared/header/Header";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="m-20">
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-blue-300">
            What should I do if I forget my password?
          </div>
          <div className="collapse-content text-xl bg-gray-100">
            <p>
              If you forget your password, click on the "Forgot Password?" link
              on the login page. Enter the email address associated with your
              account, and we’ll send you instructions on how to reset your
              password. If you don’t receive the email, please check your spam
              folder or contact our support team for assistance.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-gray-300">
            How can I start writing blogs?
          </div>
          <div className="collapse-content text-xl bg-gray-100">
            <p>
              To start writing on Mediuum, simply sign up for an account and
              navigate to the "Writer" section. From there, you can draft your
              article, add images, format your text, and when ready, publish it
              for others to read and interact with.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200  mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-red-300">
            What are the guidelines for posting content?
          </div>
          <div className="collapse-content bg-gray-100 text-xl">
            <p>
              We encourage creativity and freedom of expression but also has
              community guidelines to ensure a respectful environment. All
              content should adhere to our policies against hate speech,
              harassment, plagiarism, and inappropriate material. We encourage
              positive, constructive interactions and value original content.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-orange-300">
            Can I earn money from writing{" "}
          </div>
          <div className="collapse-content bg-gray-100">
            <p>
              Yes, Mediuum offers opportunities for writers to earn money
              through its monetization programs, such as partner programs or ad
              revenue sharing. Writers can apply to become part of these
              programs based on their engagement metrics and content quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
