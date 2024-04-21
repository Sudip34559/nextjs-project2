import { Crousel } from "@/components/Crousel";
import Image from "next/image";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <>
      <Crousel />
      <HeroHighlight>
        <div></div>
      </HeroHighlight>
    </>
  );
}
