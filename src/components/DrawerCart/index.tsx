import { useEffect, useState } from "react";
import { Drawer } from "../Drawer";
import { IoCart } from "react-icons/io5";
import { colors } from "src/styles/tokens";
import * as S from "./styles";
import { DrawerProduct } from "../DrawerProduct";
import { useProductContext } from "src/contexts/ProductContext";
import { getTotalPrice } from "src/utils/getProductContextTotals";

export const DrawerCart = () => {
  const [totalPrice, setTotalPrice] = useState("R$ 0,00");
  const { cart, isCartOpen, setIsCartOpen } = useProductContext();

  const handleDrawerOpen = () => {
    setIsCartOpen(true);
  };

  const handleDrawerClose = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <div>
      <IoCart
        id="bagIcon"
        className="icon"
        color={colors.vivendaColors.c7}
        onClick={handleDrawerOpen}
      />

      <Drawer
        isOpen={isCartOpen}
        onClose={handleDrawerClose}
        withOverlay={false}
      >
        <S.DrawerCartContainer>
          <S.TopDescriptionContent>
            <p>
              Seu carrinho tem <strong>{cart?.length} itens</strong>
            </p>
          </S.TopDescriptionContent>
          <S.Line />
          <S.DrawerCartItemWrapper>
            {cart?.map((product) => (
              <DrawerProduct {...{ product }} key={product.id} />
            ))}
          </S.DrawerCartItemWrapper>
          <S.Line />
          <S.DrawerCartCTAContainer>
            <S.CTATotalPriceContainer>
              <S.TotalContext>
                <p>Total:</p>
              </S.TotalContext>
              <S.ProductPrice>{totalPrice}</S.ProductPrice>
            </S.CTATotalPriceContainer>
            <S.CallToAction>Finalizar compra</S.CallToAction>
          </S.DrawerCartCTAContainer>
        </S.DrawerCartContainer>
      </Drawer>
    </div>
  );
};
