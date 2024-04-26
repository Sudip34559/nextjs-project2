"use client";
import React from "react";
import { BackgroundGradient2 } from "./ui/background-gradient2";

export function GradientCard2() {
  return (
    <div className="w-full flex items-center flex-col justify-center py-16">
      <h1 className="text-white md:mb-3 mb-10  text-3xl font-bold">
        PIZZA SECTION
      </h1>
      <BackgroundGradient2 />
    </div>
  );
}
