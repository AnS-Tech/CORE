"use client";

import { Layout } from "src/components/Layout";
import { Homepage } from "./styles";
import { Product } from "src/components";

export default function Page() {
  const Products = [
    {
      index: 1,
      productName: "Rosa do Deserto",
      productPrice: "90.99",
    },
    {
      index: 2,
      productName: "Rosa do Deserto",
      productPrice: "90.99",
    },
    {
      index: 3,
      productName: "Rosa do Deserto",
      productPrice: "90.99",
    },
    {
      index: 4,
      productName: "Rosa do Deserto",
      productPrice: "90.99",
    },
    {
      index: 5,
      productName: "Rosa do Deserto",
      productPrice: "90.99",
    },
    {
      index: 6,
      productName: "Rosa do Deserto",
      productPrice: "90.99",
    },
  ];
  return (
    <Layout>
      <Homepage>
        {Products.map((products) => (
          <Product
            productName={products.productName}
            productPrice={products.productPrice}
            key={products.index}
          />
        ))}
      </Homepage>
    </Layout>
  );
}
