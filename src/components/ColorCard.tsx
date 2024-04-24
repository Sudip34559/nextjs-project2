"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";
import { grid } from "./ui/background-gradient";
export function GradientCard() {
  return (
    <div className="w-full flex justify-center pt-16 ">
      <BackgroundGradient />
    </div>
  );
}
