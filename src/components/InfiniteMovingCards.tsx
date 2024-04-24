"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { url } from "inspector";

export function MovingCards() {
  return (
    <div className=" flex items-center justify-center relative overflow-hidden rounded-xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    key: 1,
    url: "/img/WUWUpvFB-removebg-preview.png",
    class: "h-[90px]",
    food: "Biriyani",
  },
  {
    key: 2,
    url: "/img/pexels-andy-kuzma-2909821-removebg-preview.png",
    class: "w-[150px] h-full",
    food: "Pizza",
  },
  {
    key: 3,
    url: "/img/DB_Burger_Image-removebg-preview.png",
    class: "h-[90px]",
    food: "Burger",
  },
  {
    key: 4,
    url: "/img/savor-chicken-shawarma-roll-arabic-food-delight-white-background_929888-494-removebg-preview.png",
    food: "Roll",
  },
  {
    key: 5,
    url: "/img/Vegetable-Hakka-Noodles-Restaurant-Style-3-removebg-preview.png",
    class: "h-full",
    food: "Noodles",
  },
  {
    key: 6,
    url: "/img/Penne-Alfredo-600x600-removebg-preview.png",
    class: "h-[90px]",
    food: "Pasta",
  },
  {
    key: 7,
    url: "/img/romaine-salad-with-orange-and-radish-43311e8909b444aba0d356d951262384-removebg-preview.png",
    class: "h-[90px]",
    food: "Salad",
  },
  {
    key: 8,
    url: "/img/png-transparent-pav-bhaji-removebg-preview.png",
    class: "h-[90px]",
    food: "Pao Bhaji",
  },
  {
    key: 9,
    url: "/img/Masala-Dosa-2-removebg-preview.png",
    food: "Dhosa",
  },
  {
    key: 10,
    url: "/img/Screenshot_2024-04-23_at_15.38.15-removebg-preview.png",
    class: "h-[90px]",
    food: "Rasgulla",
  },
  {
    key: 11,
    url: "/img/chocolate-cake-slice-o0LVr4D-600-removebg-preview.png",
    food: "Cake",
  },
  {
    key: 12,
    url: "/img/942a2da8365774ca8555a783da89c0001677781695751506_original-removebg-preview.png",
    food: "Bara Pao",
  },
  {
    key: 13,
    url: "/img/360_F_466422564_LICnIvfjfGhieSKG4gxU35LirfjrxbOB-removebg-preview.png",
    food: "Samosa",
  },
  {
    key: 14,
    url: "/img/images-removebg-preview.png",
    class: "h-[90px]",
    food: "Ice Cream",
  },
  {
    key: 15,
    url: "/img/arabian-mutton-seekh-kabab-recipe-removebg-preview.png",
    food: "Kabab",
  },
];
