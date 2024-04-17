import getIsMobile from "@/utils/is-mobile";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  name: string;
  date: string;
  summary: string;
  image: string;
  techArray: string[];
  demoUrl?: string;
  githubUrl: string;
  textLeft: boolean;
}

export default function Project(data: ProjectProps) {
  function TechIcons({ reverse }: { reverse?: boolean }) {
    const techIconsArray = data.techArray.map((tech, index) => (
      <img key={index} src={`/${tech}.svg`} alt={tech} className="w-10 p-1" />
    ));
    if (reverse) {
      techIconsArray.reverse();
    }
    return techIconsArray;
  }

  return (
    <div className="  py-2">
      <div className="  flex justify-center align-middle    max-w-[500px] mx-auto px-auto">
        <div className=" w-72  flex flex-col justify-center">
          <div className=" flex flex-col justify-center ">
            <div className=" text-center flex flex-col justify-center text-2xl ">
              {data.name}
            </div>
            <div className="  text-center font-light text-sm h-1/2">
              {data.date}
            </div>
          </div>
          <div className=" flex justify-center">
            <TechIcons />
          </div>
        </div>
        <div className="flex">
          <Image
            className="w-56"
            src={"/" + data.image + ".png"}
            width={100}
            height={200}
            alt={data.image}
          />
        </div>
      </div>
      <div className="flex justify-center gap-16 pt-6 ">
        <Link href={data.githubUrl} target="_blank" className="text-[#5c73c7]">
          Github
        </Link>
        {data.demoUrl && (
          <Link href={data.demoUrl} target="_blank" className="text-[#5c73c7]">
            Demo
          </Link>
        )}
      </div>
      <div className="min-w-[300px] max-w-[500px] text-sm mx-auto p-4">
        {data.summary}
      </div>
    </div>
  );
}
