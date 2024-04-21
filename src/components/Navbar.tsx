"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TailwindcssButtons } from "./Button";
import { IoMdCart } from "react-icons/io";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0  w-full rounded-full  z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className="flex gap-6 h-full items-center flex-1 justify-between  max-w-[1060px]">
            <Link href={"#"} className="">
              <img
                className="h-[85px]"
                src="/img/download-1-removebg-preview.png"
                alt=""
              />
            </Link>
            <div className="  pl-3 rounded-lg overflow-hidden flex-1 hidden md:flex font-thin items-center border-[1px]  border-[#d0d0d0] ">
              <Link href={"#"} className="text-3xl text-[#d0d0d0]">
                <CiSearch />
              </Link>
              <input
                type="text"
                placeholder="Search"
                className="h-full w-full py-3 px-3    caret-[#ffffff] bg-[#ffffff00]  focus:text-[#ffffff] focus:font-normal font-thin  focus:outline-none border-none  placeholder-[#d0d0d0]"
              />
              <Link href={"#"} className="px-3 md:hidden">
                <RxCrossCircled className="text-3xl  text-[#d0d0d0] font-thin flex " />
              </Link>
            </div>
            <div className="flex px-4 gap-5 items-center h-full ">
              <div className="md:hidden">
                <Link href={"#"} className="text-3xl text-[#d0d0d0] ">
                  <CiSearch />
                </Link>
              </div>
              <Link href={"#"} className="hidden md:grid">
                <TailwindcssButtons name="Login" />
              </Link>
              <div className="text-3xl text-[#d0d0d0]">
                <Link href={"#"}>
                  <IoMdCart />
                </Link>
              </div>
              <div className="text-3xl text-[#d0d0d0] w-[34px] h-[34px] flex justify-center items-center hover:border-[1px] border-[#d0d0d0] rounded-lg hover:transition hover:duration-700 relative group ">
                <BsThreeDotsVertical className="" />
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
