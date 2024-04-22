"use client";
import GetIsMobile from "@/utils/is-mobile";
import Image from "next/image";

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
  const endDate = durationParts[1] === "Current" ? "Present" : durationParts[1];
  const isMobile = GetIsMobile();

  const DurationFormat = () => {
    return (
      <div className="flex justify-center">
        <div className="mx-6 w-1/2 text-right font-light text-[#adadad]">
          {startDate}
        </div>
        <div className="text-[#adadad] ">-</div>
        <div className="mx-6 w-1/2 text-left font-light text-[#adadad]">
          {endDate}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto  max-w-[450px] ">
      <div className="flex h-[40px] items-center justify-center text-xl text-[#babed7]">
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
      <div className="pb-10 pt-3">
        <div className="mx-auto max-w-[300px] pb-1 text-center text-xl font-medium text-[#babed7] ">
          {data.company}
        </div>
        <div className=" py-1 text-center text-sm">{DurationFormat()}</div>
        <div className=" pt-1 text-sm text-[#b3abba]">{data.summary}</div>
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
