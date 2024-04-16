"use client";
import getIsMobile from "@/utils/is-mobile";
import aboutData from "@/content/about-data";
import Header from "@/components/header";
import Image from "next/image";
import Fireflies from "@/components/fireflies";

export default function AboutPage() {
  const { name, info, skills1, skills2, summary } = aboutData;
  const isMobile = getIsMobile();

  return (
    <div id="About" className=" mx-auto  max-w-[650px]   rounded-lg">
      <Header />
      <div className="">
        <div className="flex items-center justify-center  ">
          <div className="min-w-[260px] p-4 flex flex-col justify-center ">
            <div className="text-2xl">{name}</div>
            <div className="text-lg">
              <ul>
                {info.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center min-w-[100px]">
            <Image
              src="/lucian.jpg"
              alt="Lucian"
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
        <div
          className={`${
            isMobile
              ? "max-w-[450px] my-4 mx-auto px-6"
              : " max-w-[450px] my-4 mx-auto"
          }`}
        >
          {summary}
          <div className=" text-center flex">
            <div className=" py-4">
              <div className="flex ">
                <div className=" p-2 w-[300px]">Front-End</div>
                <ul className="flex flex-wrap">
                  {skills1.map((skill, index) => (
                    <li key={index} className="m-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex ">
                <div className=" p-2 w-[300px]">Back-End</div>
                <ul className="flex flex-wrap">
                  {skills2.map((skill, index) => (
                    <li key={index} className="m-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Fireflies />
      </div>
    </div>
  );
}
