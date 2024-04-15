"use client";
import getIsMobile from "@/utils/is-mobile";
import aboutData from "@/content/about-data";
import Header from "@/components/header";
import Fireflies from "@/components/fireflies";
import Image from "next/image";

export default function AboutPage() {
  const { name, info, skills1, skills2, summary } = aboutData;
  const isMobile = getIsMobile();

  return (
    <div
      id="About"
      className=" mx-auto min-w-[400px] max-w-[700px]   rounded-lg"
    >
      <Header />
      <div className="bg-[rgba(15,15,174,0.245)]">
        {``}
        <div className="flex justify-evenly">
          <div className="pt-3.5 w-[260px]">
            <div className="header-left-title font-light text-2xl">{name}</div>
            <div className="header-left-info font-light text-lg pt-1.5 pl-3">
              <ul>
                {info.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="header-right relative w-[150px] mb-3.5">
            <div className="image-container">
              <Image
                src="/lucian.jpg"
                alt="Lucian"
                width={100}
                height={100}
                className="image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMobile ? "p-8" : "mx-auto min-w-[300px] max-w-[700px] px-20 py-5"
          }`}
        >
          {summary}
        </div>
        {``}
        <div className="mx-auto min-w-[400px] max-w-[600px] text-center flex">
          {/* <div className="flex flex-col justify-between w-[140px] font-normal pt-20 pb-6 pr-3.5">
            <div>Front-End</div>
            <div>Back-End</div>
          </div>
          <div className="skills-content flex flex-col">
            <div className="skills-content-title font-normal mt-3.5 mb-3.5">
              Skills
            </div>
            <div className="skills-content-body">
              <ul>
                {skills1.map((skill, index) => (
                  <li key={index} className="m-2">
                    {skill}
                  </li>
                ))}
              </ul>
              <ul>
                {skills2.map((skill, index) => (
                  <li key={index} className="m-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
