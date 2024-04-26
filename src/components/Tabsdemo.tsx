"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
export function TabsDemo() {
  const tabs = [
    {
      title: "North India",
      value: "North India",
      url: "/img/444666.png",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#f0abfc] to-violet-900 min-h-[400px]">
          <div className="w-full h-full bg-white/[0.6] rounded-2xl p-5 flex flex-col justify-between">
            <p className=" text-purple-500">North India</p>
            <DummyContent g={north} />
          </div>
        </div>
      ),
    },
    {
      title: "East India",
      value: "East India",
      url: "/img/Screenshot_2024-04-25_at_08.16.08-removebg-preview.png",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#f0abfc] to-violet-900 min-h-[400px]">
          <div className="w-full h-full bg-white/[0.6] rounded-2xl p-5 flex flex-col justify-between">
            <p className=" text-purple-500">East India</p>
            <DummyContent g={east} />
          </div>
        </div>
      ),
    },
    {
      title: "South India",
      value: "South India",
      url: "/img/6483031.png",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#f0abfc] to-violet-900 min-h-[400px]">
          <div className="w-full h-full bg-white/[0.6] rounded-2xl p-5 flex flex-col justify-between">
            <p className=" text-purple-500">South India</p>
            <DummyContent g={south} />
          </div>
        </div>
      ),
    },
    {
      title: "West India",
      value: "West India",
      url: "/img/Screenshot_2024-04-25_at_08.20.16-removebg-preview.png",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#f0abfc] to-violet-900 min-h-[400px]">
          <div className="w-full h-full bg-white/[0.6] rounded-2xl p-5 flex flex-col justify-between">
            <p className=" text-purple-500">West India</p>
            <DummyContent g={west} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[500px] md:h-[40rem]  [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-6">
      <Tabs tabs={tabs} />
    </div>
  );
}
type gr = {
  key: number;
  title: string;
  price: number;
  offer: number;
  url: string;
  class?: string;
};

const DummyContent = ({ g }: { g?: gr[] }) => {
  return (
    <div className="w-full h-[90%] grid lg:grid-cols-3 grid-cols-2 place-items-center gap-2">
      {!!g &&
        g.map((g) => (
          <div
            key={g.key}
            className={`md:w-[300px] md:h-[200px] w-full h-[300px] bg-black/[0.6] rounded-xl overflow-hidden flex flex-col md:flex-row relative ${g.class}`}
          >
            <div className="md:w-[60%] md:h-full w-full h-[60%]  flex flex-col justify-start ">
              <img className="w-full h-full" src={g.url} alt="" />
            </div>
            <div className=" pr-2 absolute pb-4 md:pb-0  md:top-0 right-0 md:left-[61%] bottom-0  left-0  pt-3  flex md:flex-col flex-row  gap-2">
              <div className="pl-3">
                <div className="flex gap-2 flex-col">
                  <h3 className="text-white text-sm ">{g.title}</h3>
                  <div className="flex gap-1">
                    <h3 className="text-white text-sm  ">
                      ₹{Math.floor(g.price - (g.price * g.offer) / 100)}
                    </h3>
                    <h3 className="text-[#acacac] text-sm  line-through">
                      {g.price}
                    </h3>
                  </div>
                </div>

                <h3 className="text-white text-sm font-thin">-{g.offer}%</h3>
              </div>
              <div className="w-full flex flex-col gap-2 justify-center items-center">
                <button className="text-sm bg-white text-black  hover:bg-slate-200 transition duration-300 rounded-lg px-3 py-2">
                  Add to cart
                </button>
                <button className="text-sm rounded-lg px-3 py-2 border-[1px] border-white text-white  hover:text-black hover:bg-white transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export const north = [
  {
    key: 0,
    url: "/img/Butter Chicken.jpg",
    title: "Butter Chicken",
    price: 250,
    offer: 10,
  },
  {
    key: 1,
    url: "/img/Chole Bhature.jpg",
    title: "Chole Bhature",
    price: 199,
    offer: 15,
  },
  {
    key: 2,
    class: "hidden md:block ",
    url: "/img/Paneer Tikka.jpg",
    title: "Paneer Tikka",
    price: 199,
    offer: 7,
  },
  {
    key: 3,
    class: "hidden md:block ",
    url: "/img/Rajma Chawal.jpg",
    title: "Rajma Chawal",
    price: 299,
    offer: 30,
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/Rogan Josh.jpg",
    title: "Rogan Josh",
    price: 199,
    offer: 8,
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/Tandoori Chicken.jpg",
    title: "Tandoori Chicken",
    price: 230,
    offer: 17,
  },
];
export const east = [
  {
    key: 0,
    url: "/img/Chicken Kosha.jpg",
    title: "Chicken Kosha",
    price: 250,
    offer: 60,
  },
  {
    key: 1,
    url: "/img/Coconut Fish Curry.jpg",
    title: "Coconut Fish Curry",
    price: 199,
    offer: 45,
  },
  {
    key: 2,
    class: "hidden md:block ",
    url: "/img/Litti Chokha.jpg",
    title: "Litti Chokha",
    price: 199,
    offer: 20,
  },
  {
    key: 3,
    class: "hidden md:block ",
    url: "/img/Macher Jhol.jpg",
    title: "Macher Jhol",
    price: 299,
    offer: 30,
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/Pakhala Bhata.jpg",
    title: "Pakhala Bhata",
    price: 199,
    offer: 8,
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/Rosogolla .jpg",
    title: "Rosogolla",
    price: 230,
    offer: 17,
  },
];
export const south = [
  {
    key: 0,
    url: "/img/Dosa.jpg",
    title: "Dosa",
    price: 250,
    offer: 60,
  },
  {
    key: 1,
    url: "/img/Fish Curry.jpg",
    title: "Fish Curry",
    price: 199,
    offer: 45,
  },
  {
    key: 2,
    class: "hidden md:block ",
    url: "/img/Hyderabadi Biryani.jpg",
    title: "Hyderabadi Biryani",
    price: 199,
    offer: 20,
  },
  {
    key: 3,
    class: "hidden md:block ",
    url: "/img/Idli.jpg",
    title: "Idli",
    price: 299,
    offer: 30,
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/Rasam.jpg",
    title: "Rasam",
    price: 199,
    offer: 8,
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/Uttapam.jpg",
    title: "Uttapam",
    price: 230,
    offer: 17,
  },
];
export const west = [
  {
    key: 0,
    url: "/img/Bara pao.jpg",
    title: "Bara pao",
    price: 250,
    offer: 60,
  },
  {
    key: 1,
    url: "/img/Dhokla.jpg",
    title: "Dhokla",
    price: 199,
    offer: 45,
  },
  {
    key: 2,
    class: "hidden md:block ",
    url: "/img/Fafda-Jalebi.jpg",
    title: "Fafda-Jalebi",
    price: 199,
    offer: 20,
  },
  {
    key: 3,
    class: "hidden md:block ",
    url: "/img/Laal Maas.jpg",
    title: "Laal Maas",
    price: 299,
    offer: 30,
  },
  {
    key: 4,
    class: "  hidden lg:block ",
    url: "/img/Pav Bhaji.jpg",
    title: "Pav Bhaji",
    price: 199,
    offer: 8,
  },
  {
    key: 5,
    class: " hidden lg:block ",
    url: "/img/Solkadhi .jpg",
    title: "Solkadhi",
    price: 230,
    offer: 17,
  },
];
