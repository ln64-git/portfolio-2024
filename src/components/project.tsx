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
}

export default function Project(data: ProjectProps) {
  function TechIcons() {
    const techIconsArray = data.techArray.map((tech, index) => (
      <div
        key={index}
        className="flex h-8 w-8  items-center justify-center align-middle  "
      >
        <Image src={`/${tech}.svg`} alt={tech} width={40} height={40} />
      </div>
    ));
    return techIconsArray;
  }

  return (
    <div className="pb-2">
      <div className="mx-auto flex max-w-[500px] items-center justify-center py-4 align-middle">
        <div className="flex w-1/2 flex-col items-center ">
          <div className="flex max-w-[200px] flex-col pb-2">
            <div className="flex w-full flex-col justify-center text-center text-xl text-[#e7e5f1]">
              {data.name}
            </div>
            <div className="h-1/2 text-center text-sm font-light text-[#a1a4b8]">
              {data.date}
            </div>
          </div>
          <div className="flex w-4/5 items-center justify-center gap-1">
            <TechIcons />
          </div>
        </div>
        <div className="mx-4 aspect-video h-full justify-center">
          <Image
            src={"/" + data.image + ".png"}
            width={200}
            height={200}
            alt={data.image}
          />
        </div>
      </div>
      <div className="mx-auto flex h-[35px] max-w-[300px] items-center justify-between  ">
        <div className="flex h-full w-full flex-col items-center justify-center ">
          <Link href={data.githubUrl} target="_blank">
            Github
          </Link>
        </div>
        {data.demoUrl && (
          <div className="flex h-full w-full flex-col items-center justify-center ">
            <Link href={data.demoUrl} target="_blank">
              Demo
            </Link>
          </div>
        )}
      </div>
      <div className="mx-auto max-w-[500px] py-4 text-sm text-[#e7e5f1]">
        {data.summary}
      </div>
    </div>
  );
}
