"use client";
import Image from "next/image";
import GetIsMobile from "../utils/is-mobile";
import useWindowSize from "@/utils/window-size";

interface JobProps {
  company: string;
  duration: string;
  image: string;
  role?: string;
  summary?: string;
  bulletArray: string[];
}

export default function Experience(data: JobProps) {
  const durationParts = data.duration.split(" - ");
  const startDate = durationParts[0];
  const startDateParts = startDate.split(" ");
  const startMonth = startDateParts[0];
  const startYear = startDateParts[1];

  const endDate = durationParts[1] === "Current" ? "Present" : durationParts[1];
  const endDateParts = endDate.split(" ");
  const endMonth = endDateParts[0];
  const endYear = endDateParts[1];

  const windowSize = useWindowSize();

  const DurationFormat = () => {
    if (windowSize > 400) {
      return (
        <div className="flex justify-center">
          <div className="mx-6 w-1/2 text-right font-light text-[#adadad]">
            <div>{startDate}</div>
          </div>
          <div className="text-[#adadad]">-</div>
          <div className="mx-6 w-1/2 text-left font-light text-[#adadad]">
            <div>{endDate}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center">
          <div className="mx-6 w-1/2 text-right font-light text-[#adadad]">
            <div>{startMonth}</div>
            <div>{startYear}</div>
          </div>
          <div className="text-[#adadad]">-</div>
          <div className="mx-6 w-1/2 text-left font-light text-[#adadad]">
            <div>{endMonth}</div>
            <div>{endYear}</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto max-w-[450px] ">
      <div className="flex h-[40px] items-center justify-center text-xl text-[#e7e5f1]">
        {data.role}
      </div>

      <div className=" flex items-center justify-around overflow-x-hidden ">
        <div className=" flex w-1/2 justify-center ">
          <Image
            width={300}
            height={300}
            src={`/${data.image}.png`}
            alt={data.image}
          />
        </div>
      </div>
      <div className="pb-3 pt-3">
        <div className="mx-auto max-w-[300px] pb-1 text-center text-xl font-medium text-[#babed7] ">
          {data.company}
        </div>
        <div className=" py-1 text-center text-sm">{DurationFormat()}</div>
        <div className=" pt-1 text-sm text-[#e7e5f1]">{data.summary}</div>
        <ul>
          {data.bulletArray.map((bullet, index) => (
            <li
              className=" mx-8 list-disc pt-4 text-sm text-[#96969e] "
              key={index}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
