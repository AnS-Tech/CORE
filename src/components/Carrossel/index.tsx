import { Carousel } from "flowbite-react";
import bannarImage from "../../styles/images/Bannar Big.png";
import Image from "next/image";

export const Carrossel = () => {
  return (
    <div className="sm:h-[350px] xl:h-[450px] 2xl:h-[550px] my-6">
      <Carousel>
        <Image objectFit="cover" src={bannarImage} alt="..." />
        <Image objectFit="cover" src={bannarImage} alt="..." />
        <Image objectFit="cover" src={bannarImage} alt="..." />
        <Image objectFit="cover" src={bannarImage} alt="..." />
        <Image objectFit="cover" src={bannarImage} alt="..." />
      </Carousel>
    </div>
  );
};
