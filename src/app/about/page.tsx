"use client";
import aboutData from "@/content/about-data";
import Header from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
  const { name, info, skills1, skills2, summary } = aboutData;

  return (
    <div id="About" className="mx-auto max-w-[650px] px-8">
      <div className="mx-auto flex max-w-[400px] items-center justify-around  ">
        <div className="mr-4 flex flex-col justify-center ">
          <div className="bg-pruple-950 text-2xl text-[#e7e5f1] ">{name}</div>
          <div className="text-lg">
            <ul>
              {info.map((element, index) => (
                <li key={index} className="text-sm font-light text-[#a1a4b8]">
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  items-center justify-center  ">
          <Image src="/lucian.jpg" alt="Lucian" width={125} height={125} />
        </div>
      </div>
      <div className="px-auto mx-auto my-4 max-w-[400px] text-sm text-[#e7e5f1]">
        {summary}
      </div>
      <div className="mx-auto flex max-w-[500px] justify-center text-center">
        <div>
          <div className="flex max-w-[450px] ">
            <div className="w-1/3 py-1 text-sm  text-[#dcaba5]">Front-End</div>
            <ul className="flex w-2/3 flex-wrap ">
              {skills1.map((skill, index) => (
                <li key={index} className="m-1 text-sm text-[#adadad]">
                  {skill + ", "}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex max-w-[450px] ">
            <div className="w-1/3 py-1 text-sm text-[#dcaba5]">Back-End</div>
            <ul className="flex w-2/3 flex-wrap">
              {skills2.map((skill, index) => (
                <li key={index} className="m-1 text-sm text-[#adadad]">
                  {skill + ", "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
