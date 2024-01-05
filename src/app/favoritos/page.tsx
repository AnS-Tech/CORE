"use client";

import { Layout, LoadingSpin, Product } from "src/components";
import { Favorite } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { colors } from "src/styles/tokens";

export default function Page() {
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
    <Layout>
      <Favorite>
        {isLoading || products == undefined ? (
          <div className="content-loading">
            <LoadingSpin sizeMultiplicator={3} />
          </div>
        ) : (
          <>
            <h1
              style={{
                color: colors.vivendaColors.c6,
              }}
            >
              Favoritos
            </h1>
            <div className="list">
              {products.map((product) => (
                <Product {...{ product }} key={product.index} />
              ))}
              {products.map((product) => (
                <Product {...{ product }} key={product.index} />
              ))}
            </div>
          </>
        )}
      </Favorite>
    </Layout>
  );
}
