import React, { FC } from "react";
import SectionHeading from "./SectionHeading";
const HowItWorks: FC = () => {
  return (
    <div>
      <SectionHeading
        title="工作流程"
        subTitle="如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作如何工作"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 mt-14 gap-6">
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <div className="grid justify-items-center gap-y-2" key={v}>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="28" fill="#0070F4" />
              <path d="M30.2 31L32 33H39" stroke="#99C5FA" stroke-width="2" />
              <path d="M18 23H23L24.8 25" stroke="#99C5FA" stroke-width="2" />
              <path d="M18 33H23L32 23H39" stroke="white" stroke-width="2" />
              <path
                d="M36 30L39 33L36 36"
                stroke="#99C5FA"
                stroke-width="2"
                stroke-linecap="square"
              />
              <path
                d="M36 26L39 23L36 20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
            <p className="text-xl font-bold">初步沟通</p>
            <p className="text-gray-500">
              初步沟通初步沟通初步沟通初步沟通初步沟通初步沟通
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowItWorks;
