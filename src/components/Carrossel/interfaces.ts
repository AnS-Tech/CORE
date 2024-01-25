import { StaticImageData } from "next/image";

export interface BannerProps {
  index: number;
  src: StaticImageData;
  alt: string;
  titleB: string;
  desc1: string;
  span: string;
  parag: string;
  cta: string;
}
