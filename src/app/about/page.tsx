"use client";
import aboutData from "@/content/about-data";
import Header from "@/components/header";
import Image from "next/image";
import Fireflies from "@/components/fireflies";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { name, info, skills1, skills2, summary } = aboutData;

  return (
    <div id="About" className="mx-auto max-w-[650px] px-4 ">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-[450px] items-center justify-around pb-2 pt-4">
          <div className="flex flex-col justify-center ">
            <div className="text-2xl text-[#e7e5f1]">{name}</div>
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
        <div className="mx-auto my-4 max-w-[400px] text-sm text-[#e7e5f1]">
          {summary}
        </div>
        <div className="  mx-auto flex max-w-[500px] justify-center  text-center ">
          <div>
            <div className="flex max-w-[450px] ">
              <div className="w-1/3 p-1 text-sm  text-[#dcaba5]">Front-End</div>
              <ul className="flex w-2/3 flex-wrap ">
                {skills1.map((skill, index) => (
                  <li key={index} className="m-1 text-sm text-[#adadad]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex max-w-[450px] ">
              <div className="w-1/3 py-1 text-sm text-[#dcaba5]">Back-End</div>
              <ul className="flex w-2/3 flex-wrap">
                {skills2.map((skill, index) => (
                  <li key={index} className="m-1 text-sm text-[#adadad]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Fireflies />
      </motion.div>
    </div>
  );
}
