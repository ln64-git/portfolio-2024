"use client";
import Header from "@/components/header";
import Fireflies from "@/components/fireflies";
import experienceData from "../../content/experience-data";
import Experience from "@/components/experience";
import { motion } from "framer-motion";

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
    <div className="mx-auto max-w-[650px] px-4">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main frame"
      >
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
      </motion.div>
    </div>
  );
}
