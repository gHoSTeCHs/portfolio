"use client";
import React, { useState } from "react";

type CarouselProps = React.PropsWithChildren<{}>;

const Carousel = ({ children: slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  if (!slides) return null;

  if (Array.isArray(slides)) {
    const prevslide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    const nextslide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    return (
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {slides}
        </div>
        <div>
          <button onClick={prevslide}>Prev</button>
          <button onClick={nextslide}>Next</button>
        </div>
      </div>
    );
  }
};

export default Carousel;
