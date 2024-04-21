"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";

import Image from "next/image";

export function GradientCard() {
  return (
    <div>
      <BackgroundGradient className="w-[300px] h-[400px] rounded-[22px] max-w-sm p-4 sm:p-10 bg-black/[0.7] backdrop-blur-sm "></BackgroundGradient>
    </div>
  );
}
