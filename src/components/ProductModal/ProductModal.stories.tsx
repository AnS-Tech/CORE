import { Meta, StoryObj } from "@storybook/react";
import { ProductModal } from ".";
import { colors } from "src/styles/tokens";

const meta = {
  title: "components/ProductModal",
  component: ProductModal,
} satisfies Meta<typeof ProductModal>;

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
