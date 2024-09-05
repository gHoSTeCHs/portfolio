"use client";
import SectionHeader from "../ui/sectionHeader";
import Carousel from "../ui/carousel";
import { PortfolioProjects } from "@/constants/data";
import ProjectCard from "../ui/projectCard";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

interface ProjectType {
  title: string;
  img: StaticImageData;
  date: string;
  link: string;
}

const PortfolioSection = () => {
  const [projectToShow, setProjectsToShow] = useState<ProjectType[]>([]);

  const numProjectsToShow = () => {
    const width = window.innerWidth;
    let allowedProjects;
    if (width >= 1200) {
      allowedProjects = 3;
    } else {
      allowedProjects = 4;
    }

    setProjectsToShow(PortfolioProjects.slice(0, allowedProjects));
  };

  useEffect(() => {
    numProjectsToShow();
    window.addEventListener("resize", numProjectsToShow);
    return () => window.removeEventListener("resize", numProjectsToShow);
  }, []);

  return (
    <section className="container">
      <SectionHeader
        title="Explore My photography work."
        details="Portfolio"
        btntext="View All Works"
      />
      <div className="flex flex-col gap-4 py-10 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {projectToShow.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              date={project.date}
              link={project.link}
              image={project.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
