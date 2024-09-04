"use client";
import React, { useState } from "react";
import SectionHeader from "../ui/sectionHeader";
import images from "@/constants";
import Image from "next/image";

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [images.projectImg1, images.projectImg2, images.projectImg3];
  const prevslide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextslide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <section className="container">
      <SectionHeader
        title="Explore My photography work."
        details="Portfolio"
        btntext="View All My Works"
      />
      <div className="py-10 ">
        <Image
          src={slides[currentSlide]}
          alt="Project Image"
          className={` ${
            slides[currentSlide]
              ? "opacity-100 transition-opacity duration-500 ease-in-out"
              : "opacity-0"
          }`}
        />
        <div>
          <button onClick={prevslide}>Prev</button>
          <button onClick={nextslide}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
