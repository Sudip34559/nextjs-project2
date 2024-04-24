"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const grid = [
  {
    key: 0,
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
    title: "The Coach Breakfast",
    price: 250,
    offer: 10,
  },
  {
    key: 1,
    url: "/img/095e0261-05f7-457c-a4c3-b11717c034b8.jpeg",
    title: "Classic French Toast Combo",
    price: 199,
    offer: 15,
  },
  {
    key: 2,
    url: "/img/1811b834-4c65-47d7-967d-13fecc98a9c6.jpg",
    title: "The V-King",
    price: 199,
    offer: 7,
  },
  {
    key: 3,
    class: " hidden md:flex ",
    url: "/img/8106fd2e-4c9b-498b-99db-5f7034dfd859.jpeg",
    title: "The Greenhouse",
    price: 299,
    offer: 30,
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/781606cc-ad51-47c9-bc3c-a25a7cce9250.jpeg",
    title: "The Sprinter",
    price: 199,
    offer: 8,
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/f076432f-7bc9-4e02-9f19-5efadf9c6f67.jpeg",
    title: "The Muscle Multiplier",
    price: 230,
    offer: 17,
  },
  {
    key: 6,
    class: " hidden 2xl:block lg:hidden  ",
    url: "/img/05901a27-ccf7-4e67-84dc-9630cb530290.jpg",
    title: "Lemongrass Tofu Bowl",
    price: 299,
    offer: 23,
  },
  {
    key: 7,
    class: "hidden 2xl:block  lg:hidden ",
    url: "/img/de46c389-9c73-4da6-8458-7bafdfb63802.jpg",
    title: "1Papalote-Mexican Grill",
    price: 299,
    offer: 17,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevDiv = () => {
    setCurrentIndex(currentIndex === 0 ? grid.length - 1 : currentIndex - 1);
  };

  const goToNextDiv = () => {
    setCurrentIndex(currentIndex === grid.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <>
      <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:grid-cols-4 relative hidden ">
        {grid.map((g) => {
          return (
            <div
              key={g.key}
              className={cn(
                `relative p-[4px] group w-[300px] h-[400px]  ${g.class} `,
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
                  "relative z-10 rounded-[22px]  w-full h-full bg-black/[0.6] backdrop-blur-sm overflow-hidden",
                  className
                )}
              >
                <img src={g.url} alt="" />
                <div className="w-full bg-black h-[200px] p-3">
                  <div className="h-[130px]">
                    <h2 className="text-white text-xl  font-bold">{g.title}</h2>
                    <div>
                      <div className="flex gap-2">
                        <h3 className="text-white text-lg  ">
                          ₹{Math.floor(g.price - (g.price * g.offer) / 100)}
                        </h3>
                        <h3 className="text-[#acacac] text-lg  line-through">
                          {g.price}
                        </h3>
                      </div>

                      <h3 className="text-white text-lg font-thin">
                        -{g.offer}%
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="bg-white text-black hover:bg-slate-200 transition duration-300   font-semibold py-2 px-3 rounded-lg">
                      Add to cart
                    </button>
                    <button className="border-[1px] border-white hover:text-black hover:bg-white transition duration-300  text-white  font-semibold py-2 px-3 rounded-lg">
                      Order now
                    </button>
                  </div>
                </div>
                {children}
              </div>
            </div>
          );
        })}
        <div className="absolute z-20 top-[-40px] right-[-40px] md:block text-white  cursor-pointer hidden ">
          View All →
        </div>
      </div>
      <div className="w-full flex  justify-center items-center relative h-[400px] md:hidden  ">
        <div className=" ">
          {grid.map((g) => (
            <div
              key={g.key}
              className={`absolute top-0 left-0 h-full w-full flex justify-center items-center ${
                g.key === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={cn(
                  `relative p-[4px] group w-[360px] h-[460px] md:hidden block  `,
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
                    "relative z-10 rounded-[22px]  w-full h-full bg-black/[0.6] backdrop-blur-sm overflow-hidden",
                    className
                  )}
                >
                  <img src={g.url} alt="" />
                  <div className="w-full bg-black h-[250px] p-3">
                    <div className="h-[140px]">
                      <h2 className="text-white text-xl  font-bold">
                        {g.title}
                      </h2>
                      <div>
                        <div className="flex gap-2">
                          <h3 className="text-white text-lg  ">
                            ₹{Math.floor(g.price - (g.price * g.offer) / 100)}
                          </h3>
                          <h3 className="text-[#acacac] text-lg  line-through">
                            {g.price}
                          </h3>
                        </div>

                        <h3 className="text-white text-lg font-thin">
                          -{g.offer}%
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-white text-black hover:bg-slate-200 transition duration-300   font-semibold py-2 px-3 rounded-lg">
                        Add to cart
                      </button>
                      <button className="border-[1px] border-white hover:text-black hover:bg-white transition duration-300  text-white  font-semibold py-2 px-3 rounded-lg">
                        Order now
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-white/[0.6] backdrop-blur-sm text-white px-2 py-1 rounded-md z-[20]"
                  onClick={goToPrevDiv}
                >
                  {`<`}
                </button>
                <button
                  className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-white/[0.6] backdrop-blur-sm  text-white px-2 py-1 rounded-md z-[20]"
                  onClick={goToNextDiv}
                >
                  {`>`}
                </button>
                <div className="absolute z-20 top-2 right-4 block text-white  cursor-pointer md:hidden">
                  View All →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
