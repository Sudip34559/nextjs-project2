"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const grid = [
  {
    key: 0,
    url: "/img/margherita.jpg",
    title: "margherita Pizza",
    price: 350,
    offer: 20,
  },
  {
    key: 1,
    url: "/img/Pepperoni .jpg",
    title: "Pepperoni Pizza",
    price: 360,
    offer: 17,
  },
  {
    key: 2,
    url: "/img/Meat Lovers .jpg",
    title: "Meat Lovers",
    price: 399,
    offer: 21,
  },
  {
    key: 3,
    class: " hidden md:flex ",
    url: "/img/Hawaiian .jpg",
    title: "Hawaiian Pizza",
    price: 420,
    offer: 30,
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/Four Cheese .jpg",
    title: "Four Cheese Pizza",
    price: 500,
    offer: 19,
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/BBQ Chicken .jpg",
    title: "BBQ Chicken Pizza",
    price: 390,
    offer: 17,
  },
  {
    key: 6,
    class: " hidden 2xl:block lg:hidden  ",
    url: "/img/Supreme .jpg",
    title: "Supreme Pizza",
    price: 499,
    offer: 23,
  },
  {
    key: 7,
    class: "hidden 2xl:block  lg:hidden ",
    url: "/img/Vegetarian .jpg",
    title: "Vegetarian Pizza",
    price: 299,
    offer: 17,
  },
];
export const BackgroundGradient2 = ({
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
                <img className="w-full h-[200px]" src={g.url} alt="" />
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
                  <img className="w-full h-[250px]" src={g.url} alt="" />
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
