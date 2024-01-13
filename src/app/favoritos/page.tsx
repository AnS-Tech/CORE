"use client";

import { Layout, Product } from "src/components";
import { Favorite } from "./styles";
import { colors } from "src/styles/tokens";
import { useEffect, useState } from "react";
import { ProductInterface } from "src/interfaces/product";
export default function Page() {
  const [favoritedProducts, setFavoritedProducts] = useState<
    Array<ProductInterface>
  >([]);

  useEffect(() => {
    const favoritedProducts: Array<ProductInterface> = JSON.parse(
      localStorage.getItem("favorites" || "[]")
    );

    setFavoritedProducts(favoritedProducts);
  }, []);

  return (
    <Layout>
      <Favorite>
        <h1
          style={{
            color: colors.vivendaColors.c6,
          }}
        >
          Favoritos
        </h1>
        <div className="list">
          {favoritedProducts?.map((product) => (
            <Product {...{ product }} key={product.id} />
          ))}
        </div>
      </Favorite>
    </Layout>
  );
}
