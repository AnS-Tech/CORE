import { Meta, StoryObj } from "@storybook/react";
import { BigCartButton } from ".";

const meta = {
  title: "components/BigCartButton",
  component: BigCartButton,
} satisfies Meta<typeof BigCartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Adicionar ao carrinho",
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
