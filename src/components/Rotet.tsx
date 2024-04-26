"use client";
import React, { useState } from "react";
import { slides } from "../utils/slides";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/img/f7.jpg",
      name: "Indian",
    },
    {
      url: "/img/360_F_192008611_KrKZcq3NyiNSksLVPc76SQyBeXOfq1o0.jpg",
      name: "USA",
    },
    {
      url: "/img/top-view-table-full-food_23-2149209252.avif",
      name: "England",
    },
    {
      url: "/img/France_Blog_6.jpg",
      name: "France",
    },
    {
      url: "/img/istockphoto-1300135479-612x612.jpg",
      name: "Japan",
    },
    {
      url: "/img/Egyptian-Food-Trips-in-Egypt.jpg",
      name: "Egypt",
    },
    {
      url: "/img/Screenshot 2024-04-24 at 21.55.08.png",
      name: "Italy",
    },
    {
      url: "/img/russian-food-scaled.jpg",
      name: "Russia",
    },
  ];

  const rotateAngle = (360 / slides.length) * currentSlide;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className=" relative w-full flex justify-evenly  h-[700px] md:h-[800px] xl:h-[1000px]">
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
          <div className="relative md:h-[500px] md:w-[600px] xl:h-[600px] xl:w-[700px] h-[400px] w-[500px] pt-6 md:pt-0  ">
            <button
              className="absolute py-3 text-2xl top-[170px] md:top-[200px] xl:top-[250px] right-[-30px] transform -translate-y-1/2 bg-white/[0.6] backdrop-blur-sm  text-white px-2  rounded-md z-[20]"
              onClick={handleNextSlide}
            >
              {`>`}
            </button>
            <div className="block md:w-[600px] md:h-[400px] w-[500px] h-[300px] xl:w-[700px]  xl:h-[500px] rounded-xl overflow-hidden relative">
              <img
                className="block w-full h-full"
                src={slides[currentSlide].url}
                alt={`Slide ${currentSlide + 1}`}
              />
              <div className="absolute w-full h-full top-0  flex justify-center flex-col gap-3 items-center bg-black/[0.3]">
                <h3 className=" text-center text-3xl xl:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-green-700">
                  Try our {slides[currentSlide].name} delicacy
                </h3>
                <button className="px-4 py-2 backdrop-blur-sm border bg-black/[0.6] border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                  <span>View now →</span>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
