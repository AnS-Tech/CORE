import { Meta, StoryObj } from "@storybook/react";
import { BigProduct } from ".";

const meta = {
  title: "components/BigProduct",
  component: BigProduct,
  tags: ["autodocs"],
} satisfies Meta<typeof BigProduct>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    priceColor: "",
    sizeStatus: "medium",
  },
};
