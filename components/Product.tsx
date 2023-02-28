import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Product({
  title,
  description,
  backgroundImg,
  col1Text,
  col1Desc,
  col2Text,
  col2Desc,
  col3Text,
  col3Desc,
  col4Text,
  col4Desc,
  btnText,
  slug,
}: IProduct) {
  return (
    <div className="flex flex-col justify-between items-center w-[100vw] h-[100vh]">
      <Image
        src={`${backgroundImg}`}
        alt="names"
        className="object-cover w-[100vw] h-[100vh] z-10"
        layout="fill"
      />

      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="text-center pt-[15vh] z-20"
      >
        <h1
          className={`text-4xl font-medium ${
            slug === ("model-3" || "model-y" || "powerlwall") && "text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`${
            slug === ("model-3" || "model-y" || "powerlwall") && "text-white"
          }`}
        >
          {description}
        </p>
      </motion.div>
      <div className="absolute bottom-0 flex flex-col h-40 items-center justify-center blur bg-gradient-to-b from-black/10 to-black/90 z-20 w-full" />
      <div className="flex flex-col items-center justify-center z-20 w-full m-8">
        <div
          className={`flex-1 flex flex-col md:flex-row items-center justify-center space-x-20 mb-5
          }`}
        >
          {(col1Text || col1Desc) && (
            <div className="flex flex-col text-2xl  items-center opacity-85 m-[8px]">
              <span className="font-light">
                <span className={`font-semibold text-white`}>{col1Text}</span>
              </span>
              <span className={`text-sm text-white`}>{col1Desc}</span>
            </div>
          )}
          {(col2Text || col2Desc) && (
            <div className="flex flex-col text-2xl  items-center opacity-85 m-[8px]">
              <span className=" font-light">
                <span className={`font-semibold text-white`}>{col2Text}</span>
              </span>
              <span className={`text-sm text-white`}>{col2Desc}</span>
            </div>
          )}
          {(col3Text || col3Desc) && (
            <div className="flex flex-col text-2xl  items-center opacity-85 m-[8px]">
              <span className=" font-light">
                <span className={`font-semibold text-white `}>{col3Text}</span>
              </span>
              <span className={`text-sm text-white`}>{col3Desc}</span>
            </div>
          )}
          {(col4Text || col4Desc) && (
            <div className="flex flex-col text-2xl  items-center opacity-85 m-[8px]">
              <span className=" font-light">
                <span className={`font-semibold text-white`}>{col4Text}</span>
              </span>
              <span className={`text-sm text-white`}>{col4Desc}</span>
            </div>
          )}

          {btnText && (
            <div className="flex flex-col text-2xl  items-center opacity-85 m-[8px]">
              <span
                className={`border-white border-2 rounded-md h-10 w-[200px]  flex items-center justify-center opacity-85 uppercase text-sm cursor-pointer m-[8px] font-light text-white`}
              >
                {btnText}
              </span>
            </div>
          )}
        </div>
        <p className="text-white text-sm">Specs displayed are US values</p>
      </div>
    </div>
  );
}

export default Product;
