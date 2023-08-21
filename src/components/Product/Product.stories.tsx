import { Meta, StoryObj } from "@storybook/react";
import { Product } from ".";

const meta = {
  title: "components/Product",
  component: Product,
  tags: ["autodocs"],
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
    status: "Promoção 50%",
    productName: "",
  },
};
