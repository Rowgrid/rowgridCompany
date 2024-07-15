import React from "react";
import features from "../assets/images/features.png"
const Features = () => {
  return (
    <section className="mx-auto flex max-w-lg flex-col px-4 py-10 pb-16 lg:max-w-screen-xl lg:flex-row">
      <div className="max-w-md pr-20 lg:pt-28">
        <img
          src={features}
          alt=""
          className="w-60 sm:w-96"
        />
      </div>
      <div>
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full opacity-75 bg-secondry text-[#ffff] shadow-lg shadow-violet-600/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
            />
          </svg>
        </div>
        <h2 className="mb-10 max-w-lg text-white text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
          A{" "}
          <span className="my-1 inline-block rounded bg-[#ffff] px-2 text-[#eab308]">
          smart solution 
          </span>{" "}
          for creating websites
        </h2>
        <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
          <div className="text-[#fff] ">
            <div className="flex items-center">
            <div className="w-1 h-4 bg-secondry rounded mr-4"></div>
            <span className=" text-2xl leading-10">
            Expertise
            </span>
            </div>
            <p className="ml-4 text-lg text-gray-400">
            Our team comprises skilled professionals with expertise in diverse technologies, ensuring we deliver top-notch solutions across various domains.
            </p>
          </div>
          <div className="text-[#fff]">
          <div className="flex items-center">
            <div className="w-1 h-4 bg-secondry rounded mr-4"></div>
            <span className=" text-2xl leading-10">
            Innovation
            </span>
            </div>
            <p className="ml-4 text-lg text-gray-400">
            We embrace innovation, staying abreast of the latest trends and technologies to provide forward-thinking solutions that give your business a competitive edge.
            </p>
          </div>
          <div className="text-[#fff]">
          <div className="flex items-center">
            <div className="w-1 h-4 bg-secondry rounded mr-4"></div>
            <span className=" text-2xl leading-10">
            Quality Assurance
            </span>
            </div>
            <p className="ml-4 text-lg text-gray-400">
            Our commitment to quality is unwavering.
            Rigorous testing and quality assurance processes are embedded in our development lifecycle to ensure the delivery of reliable and bug-free solutions.
            </p>
          </div>
          <div className="text-[#fff]">
          <div className="flex items-center">
            <div className="w-1 h-4 bg-secondry rounded mr-4"></div>
            <span className=" text-2xl leading-10">
            Timely Delivery
            </span>
            </div>
            <p className="ml-4 text-lg font-thin text-gray-400">
            We understand the importance of deadlines. Our agile development methodology allows us to deliver projectc on time without compromising
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
