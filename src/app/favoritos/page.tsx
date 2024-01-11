"use client";

import { Layout, Product } from "src/components";
import { Favorite } from "./styles";
import { colors } from "src/styles/tokens";
import { useEffect, useState } from "react";
import { Product as ProductI } from "src/components/Product/interfaces";

export default function Page() {
  const [favoritedProducts, setFavoritedProducts] = useState<Array<ProductI>>(
    []
  );

  useEffect(() => {
    const favoritedProducts: Array<ProductI> = JSON.parse(
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
