"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    url: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3  py-10 max-w-[1400px]",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={"#"}
          key={3}
          className="relative group  block p-2 h-full w-full"
        >
          <div className=" w-fill h-full flex items-start bg-black">
            <div className=" relative  flex items-center justify-center">
              <DirectionAwareHover imageUrl={item.url}>
                <p className="font-bold text-xl">In the mountains</p>
                <p className="font-normal text-sm">$1299 / night</p>
              </DirectionAwareHover>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
