import { Crousel } from "@/components/Crousel";
import { CardHoverEffect } from "@/components/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Crousel />
      <div className="hidden lg:block">
        <CardHoverEffect />
      </div>
    </>
  );
}
