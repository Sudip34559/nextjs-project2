import { GradientCard } from "@/components/ColorCard";
import { GradientCard2 } from "@/components/ColorCard2";
import { Crousel } from "@/components/Crousel";
import { MovingCards } from "@/components/InfiniteMovingCards";
import ImageSlider from "@/components/Rotet";
import ScrollRotatingDiv from "@/components/Rotet";
import { TabsDemo } from "@/components/Tabsdemo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-full">
      <Crousel />
      <MovingCards />
      <GradientCard />
      <ImageSlider />
      <GradientCard2 />
      <div className="w-full h-[700px]">
        <TabsDemo />
      </div>
    </div>
  );
}
