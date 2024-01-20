"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CartItemInterface,
  ProductInterface,
  ProductContextInterface,
} from "src/interfaces/product";
import { defaultValuesProductContext } from "src/constants/produtcContext";
import { isEmpty } from "src/utils/isEmpty";

export const ProductContext = createContext({ ...defaultValuesProductContext });

export const ProductContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [favorites, setFavorites] = useState<ProductInterface[]>([]);
  const [cart, setCart] = useState<CartItemInterface[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchValues, setSearchValues] = useState<{
    value: string;
    products: ProductInterface[];
  }>({
    value: "",
    products: [],
  });

  const addToCart = useCallback<ProductContextInterface["addToCart"]>(
    (product: ProductInterface) => {
      const searchProduct = cart.find((item) => item?.id === product.id);

      if (searchProduct && searchProduct.quantity <= 0) {
        const newArrayToSetCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity = 1) }
            : item
        );

        setCart(newArrayToSetCart);

        localStorage.setItem(
          "@VivendaNatureza:cart",
          JSON.stringify(newArrayToSetCart)
        );

        return;
      } else if (searchProduct && searchProduct.quantity > 0) {
        return;
      }

      const newArrayToSetCart = [...cart, { ...product, quantity: 1 }];

      setCart(newArrayToSetCart);

      localStorage.setItem(
        "@VivendaNatureza:cart",
        JSON.stringify(newArrayToSetCart)
      );
    },
    [cart, setCart]
  );

  const removeFromCart = useCallback<ProductContextInterface["removeFromCart"]>(
    (product: ProductInterface) => {
      const searchProduct = cart.find((item) => item?.id === product.id);

      if (isEmpty(searchProduct) || searchProduct.quantity < 1) {
        return;
      }

      const newArrayToSetCart = cart.filter((item) => item?.id !== product.id);

      setCart(newArrayToSetCart);

      localStorage.setItem(
        "@VivendaNatureza:cart",
        JSON.stringify(newArrayToSetCart)
      );
    },
    [cart, setCart]
  );

  const plusOneToCart = useCallback<ProductContextInterface["plusOneToCart"]>(
    (product: ProductInterface) => {
      const searchProduct = cart.find((item) => item?.id === product.id);

      if (searchProduct) {
        const newArrayToSetCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        setCart(newArrayToSetCart);

        localStorage.setItem(
          "@VivendaNatureza:cart",
          JSON.stringify(newArrayToSetCart)
        );

        return;
      }
    },
    [cart, setCart]
  );

  const minusOneToCart = useCallback<ProductContextInterface["minusOneToCart"]>(
    (product: ProductInterface) => {
      const searchProduct = cart.find((item) => item?.id === product.id);

      if (searchProduct && searchProduct.quantity > 1) {
        const newArrayToSetCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        setCart(newArrayToSetCart);

        localStorage.setItem(
          "@VivendaNatureza:cart",
          JSON.stringify(newArrayToSetCart)
        );

        return;
      } else if (searchProduct && searchProduct.quantity === 1) {
        const newArrayToSetCart = cart.filter(
          (item) => item?.id !== product.id
        );

        setCart(newArrayToSetCart);

        localStorage.setItem(
          "@VivendaNatureza:cart",
          JSON.stringify(newArrayToSetCart)
        );
      }
    },
    [cart, setCart]
  );

  const addToFavorites = useCallback<ProductContextInterface["addToFavorites"]>(
    (product: ProductInterface) => {
      if (favorites.find((item) => item.id === product.id)) {
        return;
      }

      const newArrayToSetFavorites = [...favorites, product];

      setFavorites(newArrayToSetFavorites);

      localStorage.setItem(
        "@VivendaNatureza:favorites",
        JSON.stringify(newArrayToSetFavorites)
      );
    },
    [favorites, setFavorites]
  );

  const removeFromFavorites = useCallback<
    ProductContextInterface["removeFromFavorites"]
  >(
    (product: ProductInterface) => {
      const newArrayToSetFavorites = favorites.filter(
        (item) => item.id !== product.id
      );

      setFavorites(newArrayToSetFavorites);

      localStorage.setItem(
        "@VivendaNatureza:favorites",
        JSON.stringify(newArrayToSetFavorites)
      );
    },
    [setFavorites, favorites]
  );

  const addProductToList = useCallback<
    ProductContextInterface["addProductToList"]
  >(
    (product: ProductInterface) => {
      setProducts((prev) => [...prev, product]);

      localStorage.setItem(
        "@VivendaNatureza:products",
        JSON.stringify([...products, product])
      );
    },
    [setProducts, products]
  );

  useEffect(() => {
    const localStorageProducts =
      localStorage.getItem("@VivendaNatureza:products") || "[]";
    const localStorageFavorites =
      localStorage.getItem("@VivendaNatureza:favorites") || "[]";
    const localStorageCart =
      localStorage.getItem("@VivendaNatureza:cart") || "[]";

    setProducts(JSON.parse(localStorageProducts));
    setFavorites(JSON.parse(localStorageFavorites));
    setCart(JSON.parse(localStorageCart));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        cart,
        isCartOpen,
        searchValues,
        addToCart,
        removeFromCart,
        plusOneToCart,
        minusOneToCart,
        addToFavorites,
        removeFromFavorites,
        addProductToList,
        setIsCartOpen,
        setSearchValues,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
