import { stripe } from "src/libs/stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const stripeProducts = await stripe.products.list({
    limit: 16,
    expand: ["data.default_price"],
  });

  const formattedProducts = stripeProducts.data.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price:
        typeof product.default_price === "string"
          ? product.default_price
          : product.default_price.unit_amount / 100,
      image: product.images,
      metadata: product.metadata,
    };
  });

  return NextResponse.json(formattedProducts);
}
