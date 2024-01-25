import { Carousel } from "flowbite-react";
import { BannerProps } from "./interfaces";
import DesertRose from "../../styles/images/rosa-do-deserto.jpeg";
import Horse from "../../styles/images/cavalo-rosa-do-deserto.webp";
import Seeds from "../../styles/images/sementes-rosa-do-deserto.webp";
import { Banner } from "./banner";

export const Carrossel = () => {
  const Banners: Array<BannerProps> = [
    {
      index: 1,
      src: DesertRose,
      alt: "Rosas do Deserto",
      titleB: "Rosas do Deserto para sua coleção",
      desc1: "Grande variedade de Rosas do Deserto",
      span: "20% OFF",
      parag: "Entregamos em todo o Brasil",
      cta: "Ver agora",
    },
    {
      index: 2,
      src: Horse,
      alt: "Cavalos para enxerto",
      titleB: "Cavalos de Rosa do Deserto",
      desc1: "Para você colecionador",
      span: "20% OFF",
      parag: "Cavalos de 1 ano e meio à dois anos",
      cta: "Ver agora",
    },
    {
      index: 3,
      src: Seeds,
      alt: "Sementes de Rosa do Deserto",
      titleB: "Sementes de Rosa do Deserto",
      desc1: "Pack: 100 unidades",
      span: "20% OFF",
      parag: "Sementes variadas de alto padrão",
      cta: "Ver agora",
    },
  ];
  return (
    <div className="max-[375px]:hidden max-sm:h-[300px] sm:h-[350px] xl:h-[450px] 2xl:h-[550px] my-6">
      <Carousel>
        {Banners.map(({ index, src, alt, titleB, desc1, span, parag, cta }) => (
          <Banner
            key={index}
            index={index}
            src={src}
            alt={alt}
            titleB={titleB}
            desc1={desc1}
            span={span}
            parag={parag}
            cta={cta}
          />
        ))}
      </Carousel>
    </div>
  );
};
