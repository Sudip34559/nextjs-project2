"use client";
import React, { useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://via.placeholder.com/600x400?text=Slide+1",
    "https://via.placeholder.com/600x400?text=Slide+2",
    "https://via.placeholder.com/600x400?text=Slide+3",
    "https://via.placeholder.com/600x400?text=Slide+4",
    "https://via.placeholder.com/600x400?text=Slide+5",
    "https://via.placeholder.com/600x400?text=Slide+6",
    "https://via.placeholder.com/600x400?text=Slide+7",
    "https://via.placeholder.com/600x400?text=Slide+8",
  ];

  const rotateAngle = (360 / slides.length) * currentSlide;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1) % slides.length);
  };

  return (
    <div className=" relative w-full flex justify-evenly pb-10 h-[700px] xl:h-[1000px]">
      <div className="lg:w-[50%] w-full lg:min-w-[700px] min-w-[500px] flex justify-center items-center relative">
        <div
          className="md:w-[600px] md:h-[600px] xl:w-[700px] xl:h-[700px] w-[500px] h-[500px]  bg-blue-500 rounded-full 
        transform transition-transform duration-300 relative "
          style={{ transform: `rotate(${rotateAngle}deg)` }}
        >
          <img
            src="/img/download.svg"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="w-[100px] h-[100px] absolute  top-[-80px] left-[45%] z-50">
            <img
              className="w-full h-full object-cover "
              src="/img/india.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute  top-[6%] right-[0] z-50 rotate-45">
            <img
              className="w-full h-full object-cover "
              src="/img/russia.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute  right-[-80px] top-[45%] z-50 rotate-90">
            <img
              className="w-full h-full object-cover "
              src="/img/italy.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute  xl:bottom-[8%] bottom-[4%] right-[0] z-50 rotate-[135deg]">
            <img
              className="w-full h-full object-cover "
              src="/img/egypt.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute  bottom-[-80px] left-[45%] z-50 rotate-180">
            <img
              className="w-full h-full object-cover "
              src="/img/japan.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute  xl:bottom-[6%] bottom-[4%] left-[0] z-50 -rotate-[135deg]">
            <img
              className="w-full h-full object-cover "
              src="/img/france.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute  left-[-80px] top-[45%] z-50 -rotate-90">
            <img
              className="w-full h-full object-cover "
              src="/img/england.svg"
              alt=""
            />
          </div>
          <div className="w-[100px] h-[100px] absolute top-[6%] left-[0] z-50 -rotate-45">
            <img
              className="w-full h-full object-cover "
              src="/img/usa.svg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-[150px] xl:top-[240px] left-0 right-0 flex justify-center">
          <div className="relative md:h-[500px] md:w-[600px] xl:h-[600px] xl:w-[700px] h-[400px] w-[500px]   ">
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2"
              onClick={handlePrevSlide}
            >
              Previous
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2"
              onClick={handleNextSlide}
            >
              Next
            </button>
            <img
              className="block w-full"
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
