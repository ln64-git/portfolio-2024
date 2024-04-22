"use client";
import projectData from "../../content/project-data";
import Header from "@/components/header";
import Project from "@/components/project";
import Fireflies from "@/components/fireflies";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[650px] ">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <Fireflies />
      </motion.div>
    </div>
  );
}
