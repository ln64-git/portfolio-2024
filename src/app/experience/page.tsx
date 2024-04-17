import Header from "@/components/header";
import Fireflies from "@/components/fireflies";
import experienceData from "../../content/experience-data";
import Experience from "@/components/experience";

interface ExperienceItem {
  company: string;
  duration: string;
  image: string;
  role: string;
  summary: string;
  bulletArray: string[];
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[650px] ">
      <Header />
      {experienceData.map((experience: ExperienceItem, index: number) => (
        <Experience
          key={index}
          company={experience.company}
          duration={experience.duration}
          image={experience.image}
          role={experience.role}
          summary={experience.summary}
          bulletArray={experience.bulletArray}
        />
      ))}
      <Fireflies />
    </div>
  );
}
