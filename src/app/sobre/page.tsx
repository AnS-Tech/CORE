"use client";

import { Layout } from "src/components";
import * as S from "./styles";
import Image from "next/image";
import { colors } from "src/styles/tokens";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FeaturedContentComponent } from "./content";
import { GiGreenhouse } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FeaturedProps } from "./interfaces";

export default function Page() {
  const FeaturedContent: Array<FeaturedProps> = [
    {
      index: 1,
      icon: <LiaShippingFastSolid />,
      title: "Entregas em todo o Brasil",
      description: "Entregamos em todo o território nacional",
    },
    {
      index: 2,
      icon: <GiGreenhouse />,
      title: "Produção própria",
      description:
        "Directamente das nossas estufas, duram sete, dez ou mesmo quinze dias!",
    },
    {
      index: 3,
      icon: <FaHandHoldingDollar />,
      title: "Reembolso Garantido",
      description: "7 dias para arrependimento",
    },
  ];
  return (
    <Layout>
      <S.About>
        <S.AboutUs>
          <S.AboutTitleContainer>
            <h1>SOBRE NÓS</h1>
            <p>Nos conheça, nos descubra, nos vivencie...</p>
          </S.AboutTitleContainer>

          <S.SessionAboutContainer>
            <S.SessionAboutDescriptionsWrapper>
              <S.SessionAboutDescription>
                <h2>
                  Mais do que um horticultor, costumamos dizer que somos
                  horticultores{" "}
                  <strong style={{ color: `${colors.vivendaColors.c2}` }}>
                    com raízes na produção
                  </strong>
                </h2>
              </S.SessionAboutDescription>
              <S.SessionAboutDescription>
                <h2>A nossa história</h2>
                <p>
                  Somos o seu horticultor ornamental de Macaíba-RN, desde 20 de
                  Janeiro de 2017.
                </p>
                <p>
                  Somos especialista na produção e comercialização de plantas
                  ornamentais e te trago para aprender e observar de perto,
                  junto a nossa vivenda, uma experiência positiva de cuidados
                  com as plantas e a natureza.
                </p>
              </S.SessionAboutDescription>
            </S.SessionAboutDescriptionsWrapper>
            <S.SessionAboutImageWrapper>
              <Image
                src={
                  "https://botanicaipe.com.br/wp-content/uploads/2023/03/rosa-do-deserto-2.jpeg"
                }
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </S.SessionAboutImageWrapper>
          </S.SessionAboutContainer>

          <S.SessionAboutContainer>
            <S.SessionAboutImageWrapper>
              <Image
                src={
                  "https://botanicaipe.com.br/wp-content/uploads/2023/03/rosa-do-deserto-2.jpeg"
                }
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </S.SessionAboutImageWrapper>
            <S.SessionAboutDescriptionsWrapper>
              <S.SessionAboutDescription>
                <h2>A nossa missão</h2>
                <p>
                  Produzir e comercializar plantas ornamentais de qualidade,
                  oferecendo aos nossos clientes beleza e bem-estar, assim como,
                  a experiência positiva de aprendizado pela observação, contato
                  e cuidados com as plantas e/ou natureza.
                </p>
                <p>
                  Além de oferecer um atendimento totalmente personalizado e
                  saber a importância de uma entrega feita no prazo solicitado,
                  com qualidade, e tentando sempre maximizar o efeito surpresa.
                </p>
              </S.SessionAboutDescription>
              <S.SessionAboutDescription>
                <h2>Os nossos valores</h2>
                <p>
                  Posicionamos o cliente sempre em primeiro lugar e é por isso
                  que trabalhamos todos os dias para oferecer um atendimento
                  personalizado e diferenciado.
                </p>
                <p>
                  Centramos muitos esforços novos projetos e procuramos{" "}
                  <strong>proporcionar as mudas mais frescas do mercado</strong>
                  , bem como plantas decorativas.
                </p>
              </S.SessionAboutDescription>
            </S.SessionAboutDescriptionsWrapper>
          </S.SessionAboutContainer>
        </S.AboutUs>
        <S.Featured>
          <S.FeaturedTopContainer>
            <h2>Porquê a Vivenda Natureza?</h2>
            <p>
              Entregamos plantas frescas ao domicílio, diretamente das nossas
              estufas de produção. Entragamos para todo o Brasil.
            </p>
          </S.FeaturedTopContainer>
          <S.FeaturedBottonContainer>
            {FeaturedContent.map((featured) => (
              <FeaturedContentComponent
                index={featured.index}
                key={featured.title}
                icon={featured.icon}
                title={featured.title}
                description={featured.description}
              />
            ))}
          </S.FeaturedBottonContainer>
        </S.Featured>
      </S.About>
    </Layout>
  );
}
