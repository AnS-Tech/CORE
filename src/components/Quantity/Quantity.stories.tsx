import { Meta, StoryObj } from "@storybook/react";
import { Quantity } from ".";

const meta = {
  title: "components/Quantity",
  component: Quantity,
} satisfies Meta<typeof Quantity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "1",
      description: "Product Description",
      name: "Product Name",
      price: "1000",
      image: ["https://picsum.photos/500/500"],
    },
  },
};
