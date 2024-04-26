"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function GradientCard() {
  return (
    <div className="w-full flex items-center flex-col justify-center py-16 ">
      <h1 className="text-white md:mb-3 mb-10  text-3xl font-bold">
        BREAKFAST SECTION
      </h1>
      <BackgroundGradient />
    </div>
  );
}
