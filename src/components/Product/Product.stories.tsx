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
    priceColor: colors.grayScale900,
    textColor: colors.grayScale700,
    backgroundColor: colors.white,
    sizeStatus: "small",
    product: {
      id: "1",
      description: "Product Description",
      name: "Product Name",
      price: "1000",
      image: ["https://picsum.photos/500/500"],
    },
  },
};
