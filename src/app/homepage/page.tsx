"use client";

import { Layout } from "src/components/Layout";
import { Homepage } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { LoadingSpin, Product } from "src/components";
import { colors } from "src/styles/tokens";
import { useProductContext } from "src/contexts/ProductContext";
import { isEmpty } from "src/utils/isEmpty";

export default function Page() {
  const { addProductToList, searchValues } = useProductContext();
  const getProducts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-products`
    );
    const data = await response.json();
    addProductToList(data);
    return data;
  };

  const { data: products, isLoading } = useQuery(["products"], getProducts);

  return (
    <Layout>
      <Homepage>
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
              {searchValues?.value?.length > 0
                ? `Resultados da pesquisa: `
                : "Produtos"}
            </h1>
            <div className="list">
              {isEmpty(searchValues?.value)
                ? products?.map((product) => (
                    <Product {...{ product }} key={product.id} />
                  ))
                : searchValues?.products?.map((product) => (
                    <Product {...{ product }} key={product.id} />
                  ))}
            </div>
          </>
        )}
      </Homepage>
    </Layout>
  );
}
