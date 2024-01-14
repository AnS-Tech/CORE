import { NextRequest, NextResponse } from "next/server";
import { stripe } from "src/libs/stripe";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const searchValue = searchParams.get("search_value");

    if (!searchValue) {
      return NextResponse.json([]);
    }

    const stripeProducts = await stripe.products.search({
      query: `name:\'${searchValue}\' OR description: \'${searchValue}\' `,
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
  } catch (err) {
    return NextResponse.json([]);
  }
}
