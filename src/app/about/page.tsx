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
    <div id="About" className="mx-auto max-w-[650px] ">
      <Header />
      <div className="max-w-[450px] mx-auto flex items-center justify-around">
        <div className="py-4 flex flex-col justify-center">
          <div className="text-2xl">{name}</div>
          <div className="text-lg">
            <ul>
              {info.map((element, index) => (
                <li key={index} className="text-sm">
                  {element}
                </li>
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
            ? "max-w-[450px] my-4 text-sm mx-auto px-10"
            : " max-w-[450px]  my-4 text-sm mx-auto px-10"
        }`}
      >
        {summary}
      </div>
      <div className="  text-center flex max-w-[500px] justify-center  mx-auto ">
        <div className=" py-4 ">
          <div className="flex max-w-[450px]  ">
            <div className="p-1 text-sm w-1/3">Front-End</div>
            <ul className="flex flex-wrap w-2/3">
              {skills1.map((skill, index) => (
                <li key={index} className="m-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex max-w-[450px] ">
            <div className="py-1 text-sm w-1/3">Back-End</div>
            <ul className="flex flex-wrap w-2/3">
              {skills2.map((skill, index) => (
                <li key={index} className="m-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Fireflies />
    </div>
  );
}
