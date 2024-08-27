import React from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="bg-black px-10 pb-20">
      <h1 className="text-5xl text-white font-bold text-center mb-20">
        Trending Blogs
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 bg-gray-100 rounded-lg mx-4 my-10">
          <Link>
            <div className="single-blog">
              <img
                src="/public/ai-generated-8846756_1920.jpg"
                alt=""
                className="w-full"
              />
              <p className="font-bold my-3">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-xl font-bold">
                AI Engineer Career Roadmap: A Comprehensive Guide to Becoming an
                AI Expert
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 bg-gray-100 rounded-lg mx-4 my-10">
          <Link>
            <div className="single-blog">
              <img
                src="/public/ai-generated-8846756_1920.jpg"
                alt=""
                className="w-full"
              />
              <p className="font-bold my-3">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-xl font-bold">
                AI Engineer Career Roadmap: A Comprehensive Guide to Becoming an
                AI Expert
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 bg-gray-100 rounded-lg mx-4 my-10">
          <Link>
            <div className="single-blog">
              <img
                src="/public/ai-generated-8846756_1920.jpg"
                alt=""
                className="w-full"
              />
              <p className="font-bold my-3">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-xl font-bold">
                AI Engineer Career Roadmap: A Comprehensive Guide to Becoming an
                AI Expert
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 bg-gray-100 rounded-lg mx-4 my-10">
          <Link>
            <div className="single-blog">
              <img
                src="/public/ai-generated-8846756_1920.jpg"
                alt=""
                className="w-full"
              />
              <p className="font-bold my-3">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-xl font-bold">
                AI Engineer Career Roadmap: A Comprehensive Guide to Becoming an
                AI Expert
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 bg-gray-100 rounded-lg mx-4 my-10">
          <Link>
            <div className="single-blog">
              <img
                src="/public/ai-generated-8846756_1920.jpg"
                alt=""
                className="w-full"
              />
              <p className="font-bold my-3">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-xl font-bold">
                AI Engineer Career Roadmap: A Comprehensive Guide to Becoming an
                AI Expert
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 p-5 bg-gray-100 rounded-lg mx-4 my-10">
          <Link>
            <div className="single-blog">
              <img
                src="/public/ai-generated-8846756_1920.jpg"
                alt=""
                className="w-full"
              />
              <p className="font-bold my-3">
                written by <span className="text-blue-500">mr. John Doe</span>
              </p>
              <h1 className="text-xl font-bold">
                AI Engineer Career Roadmap: A Comprehensive Guide to Becoming an
                AI Expert
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
