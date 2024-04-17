"use client";
import getIsMobile from "@/utils/is-mobile";

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
  const isMobile = getIsMobile();

  const DurationFormat = () => {
    return (
      <div className="flex justify-center">
        <div className="w-1/2 text-right mx-6">{startDate}</div>
        <div>-</div>
        <div className="w-1/2 text-left mx-6">{endDate}</div>
      </div>
    );
  };

  return (
    <div
      className={`${
        isMobile
          ? "max-w-[450px] my-4 mx-auto px-6"
          : " max-w-[450px] my-4 mx-auto"
      }`}
    >
      <div className="header">
        <div className="flex justify-center pb-3 text-xl font-medium">
          {data.role}
        </div>
        <div className=" flex justify-around items-center overflow-x-hidden">
          <div className=" w-1/2 flex justify-center">
            <img
              className="header-image"
              src={`/${data.image}.png`}
              alt={data.image}
            />
          </div>
        </div>
      </div>
      <div className=" pt-4 pb-12">
        <div className=" text-center text-xl font-medium">{data.company}</div>
        <div className=" text-center text-sm py-2">{DurationFormat()}</div>
        <div className="text-sm py-2">{data.summary}</div>
        <ul>
          {data.bulletArray.map((bullet, index) => (
            <li className=" py-2 mx-8  list-disc text-sm" key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
