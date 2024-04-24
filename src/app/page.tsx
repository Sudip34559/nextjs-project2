import { CardSlider } from "@/components/CardSlider";
import { GradientCard } from "@/components/ColorCard";
import { Crousel } from "@/components/Crousel";
import { MovingCards } from "@/components/InfiniteMovingCards";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Crousel />
      <MovingCards />
      <GradientCard />
      <CardSlider />
    </>
  );
}
