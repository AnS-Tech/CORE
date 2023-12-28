"use client";

import { Layout } from "src/components/Layout";
import { Homepage } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { Product } from "src/components";

export default function Page() {
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
      <Homepage>
        {isLoading || products == undefined ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <Product {...{ product }} key={product.index} />
          ))
        )}
      </Homepage>
    </Layout>
  );
}
