import { Meta, StoryObj } from "@storybook/react";
import { Product } from ".";

const meta = {
  title: "components/Product",
  component: Product,
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "1",
      description: "Product Description",
      name: "Product Name",
      price: 1000,
      image: ["https://picsum.photos/500/500"],
      metadata: {
        estoque: "10",
      },
    },
  },
};
