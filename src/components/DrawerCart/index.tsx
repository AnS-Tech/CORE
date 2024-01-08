import { useEffect, useState } from "react";
import { Drawer } from "../Drawer";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { colors } from "src/styles/tokens";
import * as S from "./styles";
import { DrawerProduct } from "../DrawerProduct";
import { Product } from "../Product/interfaces";

export const DrawerCart = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [cartProducts, setCartProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    const storedProducts: Array<Product> = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    setCartProducts(storedProducts);

    if (cartProducts && cartProducts.length > 0) {
      setTotalPrice(
        cartProducts.reduce((acc, product) => acc + (product.price || 0), 0)
      );
    }
  }, []);

  return (
    <div>
      <Link href={"#"} onClick={handleDrawerOpen}>
        <IoCart id="bagIcon" className="icon" color={colors.vivendaColors.c7} />
      </Link>

      <Drawer isOpen={drawerOpen} onClose={handleDrawerClose}>
        <S.DrawerCartContainer>
          <S.TopDescriptionContent>
            <p>
              Seu carrinho tem <strong>{cartProducts.length} itens</strong>
            </p>
          </S.TopDescriptionContent>
          <S.Line />
          <S.DrawerCartItemWrapper>
            {cartProducts?.map((product) => (
              <DrawerProduct {...{ product }} key={product.id} />
            ))}
          </S.DrawerCartItemWrapper>
          <S.Line />
          <S.DrawerCartCTAContainer>
            <S.CTATotalPriceContainer>
              <S.TotalContext>
                <p>Total:</p>
              </S.TotalContext>
              <S.ProductPrice>
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </S.ProductPrice>
            </S.CTATotalPriceContainer>
            <S.CallToAction>Finalizar compra</S.CallToAction>
          </S.DrawerCartCTAContainer>
        </S.DrawerCartContainer>
      </Drawer>
    </div>
  );
};
