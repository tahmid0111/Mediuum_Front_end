import React from "react";
import { faqData } from "../../utility/dummyData";
import HomePageLayout from "../../layout/HomePageLayout";

const Faq = () => {
  return (
    <HomePageLayout>
      <div className="m-5 sm:m-20 z-10">
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-blue-300">
            {faqData.question1}
          </div>
          <div className="collapse-content text-lg sm:text-xl bg-gray-100">
            <p>{faqData.answer1}</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-gray-300">
            {faqData.question2}
          </div>
          <div className="collapse-content text-lg sm:text-xl bg-gray-100">
            <p>{faqData.answer2}</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200  mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-red-300">
            {faqData.question3}
          </div>
          <div className="collapse-content bg-gray-100 text-lg sm:text-xl">
            <p>{faqData.answer3}</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-orange-300">
          {faqData.question4}
          </div>
          <div className="collapse-content bg-gray-100 text-lg sm:text-xl">
            <p>{faqData.answer4}</p>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Faq;
