import React from "react";
import { guideData, headingContent } from "../../utility/dummyData";
import HomePageLayout from "../../layout/HomePageLayout";

const Guide = () => {
  return (
    <HomePageLayout>
      <div className="m-5 sm:m-10 md:m-20">
        <div className="header-content mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-5">
            {headingContent.title}
          </h1>
          <p className="text-lg sm:text-xl font-sans">{headingContent.desc}</p>
        </div>
        <div className="body-content">
          {guideData.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-bold mb-5">
                {item.title}
              </h2>
              <h3 className="text-lg sm:text-xl font-bold">{item.subTitle}</h3>
              <p className="text-lg sm:text-xl font-sans my-3">
                {item.content}
              </p>
              <h3 className="text-lg sm:text-xl font-bold">{item.subTitle2}</h3>
              <p className="text-lg sm:text-xl font-sans my-3">
                {item.content2}
              </p>
              {item.subTitle3 && (
                <h3 className="text-lg sm:text-xl font-bold">
                  {item.subTitle3}
                </h3>
              )}
              {item.content3 && (
                <p className="text-lg sm:text-xl mt-3 mb-20">{item.content3}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Guide;
