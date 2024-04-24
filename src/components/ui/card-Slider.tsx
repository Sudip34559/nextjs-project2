"use client";
import { useState } from "react";

export const ImageSlider = ({
  images,
}: {
  images: {
    url: string;
  }[];
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white py-2 px-4 rounded-l-md hover:bg-gray-800"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white py-2 px-4 rounded-r-md hover:bg-gray-800"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};
