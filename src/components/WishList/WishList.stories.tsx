import { Meta, StoryObj } from "@storybook/react";
import { WishList } from ".";

const meta = {
  title: "components/WishList",
  component: WishList,
} satisfies Meta<typeof WishList>;

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
