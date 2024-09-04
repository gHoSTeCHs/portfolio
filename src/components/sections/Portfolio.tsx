"use client";
import React, { useState } from "react";
import SectionHeader from "../ui/sectionHeader";
import images from "@/constants";
import Image from "next/image";
import Carousel from "../ui/carousel";

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
      <div className="py-10 max-w-lg mx-auto ">
        <Carousel>
          {slides.map((slide, index) => (
            <div className="w-full h-full" key={index}>
              <Image src={slide} alt="Project Image" className="w-full h-full object-cover" />
            </div>
            
          ))}
        </Carousel>

        
      </div>
    </section>
  );
};

export default PortfolioSection;
