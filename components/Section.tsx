import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  id,
}: Section) {
  return (
    <div
      id={id}
      className={`flex flex-col relative justify-between items-center w-[100vw] h-[100vh] `}
    >
      <Image
        src={`/assets/${backgroundImg}`}
        alt="names"
        className="object-cover w-[100vw] h-[100vh] z-10"
        layout="fill"
      />
      <Fade bottom>
        <div className="text-center pt-[15vh] z-20">
          <h1 className="text-4xl">{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>
      <div className="z-20">
        <Fade bottom>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="bg-gray-600 h-10 w-[256px] text-white flex items-center justify-center rounded-sm opacity-85 uppercase text-sm cursor-pointer m-[8px]">
              {leftBtnText}
            </div>
            {rightBtnText && (
              <div className="bg-white h-10 w-[256px] text-black flex items-center justify-center rounded-sm opacity-65 uppercase text-sm cursor-pointer m-[8px]">
                {rightBtnText}
              </div>
            )}
          </div>
        </Fade>
        <div className="flex w-full items-center justify-center  h-[40px] animate-animateDown overflow-x-hidden text-white">
          <ExpandMore className="w-5 h-5 !text-white" />
        </div>
      </div>
    </div>
  );
}

export default Section;
