"use client";

import { Layout, Product } from "src/components";
import { Favorite } from "./styles";
import { colors } from "src/styles/tokens";
import { useProductContext } from "src/contexts/ProductContext";

export default function Page() {
  const { favorites } = useProductContext();

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
          {favorites?.map((product) => (
            <Product {...{ product }} key={product.id} />
          ))}
        </div>
      </Favorite>
    </Layout>
  );
}
