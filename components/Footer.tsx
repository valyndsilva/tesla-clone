import Link from "next/link";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex space-x-4 h-24 w-full items-center justify-center  text-sm text-gray-600">
      <p>Tesla © {currentYear}</p>
      <div className="flex space-x-4">
        <Link href="">Privacy & Legal</Link>
        <Link href="">Contact</Link>
        <Link href="">Careers</Link>
        <Link href="">News</Link>
        <Link href="">Locations</Link>
      </div>
    </div>
  );
}

export default Footer;
