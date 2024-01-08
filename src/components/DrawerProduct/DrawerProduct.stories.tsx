import { Meta, StoryObj } from "@storybook/react";
import { colors } from "src/styles/tokens";
import { DrawerProduct } from ".";

const meta = {
  title: "components/DrawerProduct",
  component: DrawerProduct,
} satisfies Meta<typeof DrawerProduct>;

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
      price: 1000,
      image: ["https://picsum.photos/500/500"],
    },
  },
};
