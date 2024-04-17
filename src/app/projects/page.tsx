"use client";
import projectData from "../../content/project-data";
import Header from "@/components/header";
import Project from "@/components/project";
import Fireflies from "@/components/fireflies";

export default function ProjectsPage() {
  return (
    <div id="Projects" className="mx-auto max-w-[650px]">
      <Header />
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      <Fireflies />
    </div>
  );
}
