import React, { useEffect, useState } from "react";
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

  // Change HeaderNav background on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`min-h-[10vh] fixed flex items-center justify-between py-0 px-10 top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-white transition ease-in shadow-md " : null
      } `}
    >
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt=""
          className="object-cver w-28 h-4"
          width={120}
          height={16}
        />
      </Link>
      <div className="hidden md:inline-flex items-center justify-center flex-1 space-x-4 text-sm font-semibold ">
        {cars &&
          cars.map((car: string, index: number) => (
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
        className={`fixed top-0 bottom-0 right-0 bg-white w-[300px] border-l list-none px-10 py-5 flex flex-col text-start transform transition-all duration-200 space-y-5 ${
          burgerStatus ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex justify-end">
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setBurgerStatus(false)}
          />
        </div>

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
    </header>
  );
}

export default Header;
