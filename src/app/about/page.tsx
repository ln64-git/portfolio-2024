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
    <div id="About" className="mx-auto max-w-[650px] px-4 ">
      <Header />
      <div className="mx-auto flex max-w-[450px] pt-4 pb-2 items-center justify-around">
        <div className="flex flex-col justify-center ">
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
        <div className="flex min-w-[100px] items-center justify-center">
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
            ? "mx-auto my-4 max-w-[400px]  text-sm"
            : " mx-auto  my-4 max-w-[400px]  text-sm"
        }`}
      >
        {summary}
      </div>
      <div className="  mx-auto flex max-w-[500px] justify-center  text-center ">
        <div>
          <div className="flex max-w-[450px]  ">
            <div className="w-1/3 p-1 text-sm">Front-End</div>
            <ul className="flex w-2/3 flex-wrap">
              {skills1.map((skill, index) => (
                <li key={index} className="m-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex max-w-[450px] ">
            <div className="w-1/3 py-1 text-sm">Back-End</div>
            <ul className="flex w-2/3 flex-wrap">
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
