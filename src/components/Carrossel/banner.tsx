import Image from "next/image";
import { BannerProps } from "./interfaces";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Banner = ({
  index,
  src,
  alt,
  titleB,
  desc1,
  span,
  parag,
  cta,
}: BannerProps) => {
  return (
    <>
      <Image
        key={index}
        src={src}
        className="absolute block object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt={alt}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>

      <div className="absolute flex flex-col gap-8 -translate-x-3/4 -translate-y-1/2 top-1/2 left-1/2 ">
        <h1 className="text-5xl font-semibold text-white">{titleB}</h1>
        <div className="flex gap-4 items-center">
          <div className="w-[2px] h-14 bg-vivendaNatureza-c7"></div>
          <div>
            <div className="flex gap-3 ">
              <h3 className="text-lg text-vivendaNatureza-c3">{desc1} </h3>
              <span className="flex items-center justify-center bg-amber-500 text-vivendaNatureza-c3 text-lg font-medium me-2 px-2.5 py-0.5 rounded ">
                {span}
              </span>
            </div>
            <p className="text-sm text-vivendaNatureza-c3">{parag}</p>
          </div>
        </div>
        <Button
          id="CTA-button-banner"
          className="w-48 rounded-3xl enabled:bg-gray-50 enabled:hover:bg-vivendaNatureza-c3 bg-gray-50 hover:bg-vivendaNatureza-c3 text-vivendaNatureza-c6"
        >
          <p>{cta}</p>
          <HiOutlineArrowRight className=" h-5 w-5 ml-8" />
        </Button>
      </div>
    </>
  );
};
