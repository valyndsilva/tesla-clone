import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../redux/slices/carSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(cars);

  return (
    <div className="min-h-[60px] fixed flex items-center justify-between py-0 px-8 top-0 left-0 right-0 z-10">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt=""
          className="object-contain w-32 h-5"
          width={120}
          height={16}
        />
      </Link>
      <div className="hidden md:inline-flex items-center justify-center flex-1 space-x-4 text-sm font-semibold ">
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={`#${car}`} className="py-0 px-2 flex-nowrap">
              {car}
            </a>
          ))}
        <a href="#solar-roof" className="py-0 px-2 flex-nowrap">
          Solar Roof
        </a>
        <a href="#solar-panels" className="py-0 px-2 flex-nowrap">
          Solar Panels
        </a>
      </div>
      <div className="flex items-center space-x-4 text-sm font-semibold">
        <a href="#" className="flex mr-2">
          Support
        </a>
        <a href="#" className="flex mr-2">
          Shop
        </a>
        <a href="#" className="flex mr-2">
          Account
        </a>
        <MenuIcon
          className="cursor-pointer"
          onClick={() => setBurgerStatus(true)}
        />
      </div>
      <div
        className={`fixed top-0 bottom-0 right-0 bg-white w-[300px] list-none p-5 flex flex-col text-start transform transition-all duration-200 space-y-4 ${
          burgerStatus ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex justify-end">
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setBurgerStatus(false)}
          />
        </div>
        {/* {cars &&
            cars.map((car, index) => (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            ))} */}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Company Cars</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
