import { Meta, StoryObj } from "@storybook/react";
import { CartButton } from ".";

const meta = {
  title: "components/CartButton",
  component: CartButton,
} satisfies Meta<typeof CartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
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
