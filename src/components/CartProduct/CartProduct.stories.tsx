import { Meta, StoryObj } from "@storybook/react";
import { CartProduct } from ".";
import { colors } from "src/styles/tokens";

const meta = {
    title: "components/CartProduct",
    component: CartProduct,
} satisfies Meta<typeof CartProduct>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default : Story = {
    args:{
        productName: "Rosa do Deserto",
        productPrice: "99.90",
        priceColor: colors.grayScale900,
        textColor: colors.grayScale700,
        backgroundColor: colors.white,
    }
}