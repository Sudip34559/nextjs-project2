import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const grid = [
  {
    key: 0,
    class: " ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 1,
    class: " ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 2,
    class: "  ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 3,
    class: " hidden md:flex ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 6,
    class: " hidden 2xl:block lg:hidden  ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
  {
    key: 7,
    class: "hidden 2xl:block  lg:hidden ",
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
  },
];
export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:grid-cols-4 relative">
      {grid.map((g) => {
        return (
          <div
            key={g.key}
            className={cn(
              `relative p-[4px] group w-[300px] h-[400px] ${g.class} `,
              containerClassName
            )}
          >
            <motion.div
              variants={animate ? variants : undefined}
              initial={animate ? "initial" : undefined}
              animate={animate ? "animate" : undefined}
              transition={
                animate
                  ? {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }
                  : undefined
              }
              style={{
                backgroundSize: animate ? "400% 400%" : undefined,
              }}
              className={cn(
                "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
                " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
              )}
            />
            <motion.div
              variants={animate ? variants : undefined}
              initial={animate ? "initial" : undefined}
              animate={animate ? "animate" : undefined}
              transition={
                animate
                  ? {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }
                  : undefined
              }
              style={{
                backgroundSize: animate ? "400% 400%" : undefined,
              }}
              className={cn(
                "absolute inset-0 rounded-3xl z-[1] will-change-transform ",
                "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
              )}
            />

            <div
              className={cn(
                "relative z-10 rounded-[22px] w-full h-full bg-black/[0.6] backdrop-blur-sm overflow-hidden",
                className
              )}
            >
              <img src={g.url} alt="" />
              {children}
            </div>
          </div>
        );
      })}
      <div className="absolute z-20 top-[-40px] right-[-40px] block  cursor-pointer">
        View All →
      </div>
    </div>
  );
};
