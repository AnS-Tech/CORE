import { useState } from "react";
import { Drawer } from "../Drawer";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { colors } from "src/styles/tokens";
import * as S from "./styles";
import { ProductProps } from "../Product/interfaces";
import { useQuery } from "@tanstack/react-query";
import { LoadingSpin } from "../LoadingSpin";
import { DrawerProduct } from "../DrawerProduct";

export const DrawerCart = ({ product }: ProductProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const nProductPrice = 1000;

  // get products apenas para vizualização de produtos em tela
  const getProducts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-products`
    );
    const data = await response.json();
    return data;
  };

  const { data: products, isLoading } = useQuery(["products"], getProducts);
  return (
    <div>
      <Link href={"#"} onClick={handleDrawerOpen}>
        <IoCart id="bagIcon" className="icon" color={colors.vivendaColors.c7} />
      </Link>

      <Drawer isOpen={drawerOpen} onClose={handleDrawerClose}>
        <S.DrawerCartContainer>
          <S.TopDescriptionContent>
            <p>
              Seu carrinho tem <strong>{5} itens</strong>
            </p>
          </S.TopDescriptionContent>
          <S.Line />
          <S.DrawerCartItemWrapper>
            {isLoading || products == undefined ? (
              <div className="content-loading">
                <LoadingSpin sizeMultiplicator={3} />
              </div>
            ) : (
              <div>
                {products.map((product) => (
                  <DrawerProduct {...{ product }} key={product.index} />
                ))}
              </div>
            )}
          </S.DrawerCartItemWrapper>
          <S.Line />
          <S.DrawerCartCTAContainer>
            <div>
              <p>Total:</p>
            </div>
            <S.ProductPrice>
              {nProductPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </S.ProductPrice>
            <S.CallToAction>Finalizar compra</S.CallToAction>
          </S.DrawerCartCTAContainer>
        </S.DrawerCartContainer>
      </Drawer>
    </div>
  );
};
