import { Meta, StoryObj } from "@storybook/react";
import { Product } from ".";
import { colors } from "src/styles/tokens";

const meta = {
  title: "components/Product",
  component: Product,
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "",
    productName: "Rosa do Deserto",
    productPrice: "99.90",
    priceColor: colors.grayScale900,
    textColor: colors.grayScale700,
    backgroundColor: colors.white,
    sizeStatus: "small",
  },
};
