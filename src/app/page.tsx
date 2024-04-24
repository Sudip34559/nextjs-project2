import { GradientCard } from "@/components/ColorCard";
import { Crousel } from "@/components/Crousel";
import { MovingCards } from "@/components/InfiniteMovingCards";
import ImageSlider from "@/components/Rotet";
import ScrollRotatingDiv from "@/components/Rotet";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Crousel />
      <MovingCards />
      <GradientCard />
      <ImageSlider />
    </div>
  );
}
