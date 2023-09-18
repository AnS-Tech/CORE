import { Meta, StoryObj } from "@storybook/react";
import { Product } from ".";
import { colors } from "src/styles/tokens";

const meta = {
  title: "components/Product",
  component: Product,
  tags: ["autodocs"],
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "",
    productName: "",
    productPrice: "",
    tag: "",
    priceColor: colors.grayScale900,
    textColor: colors.grayScale700,
    backgroundColor: colors.white,
  },
};
