"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function Crousel() {
  const images = [
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-green-700 py-4">
          Welcome to Time Breakfast,
          <br /> where every bite tells a story and every dish is a journey.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-black/[0.6] border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Order now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
