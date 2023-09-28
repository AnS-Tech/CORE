import { Meta, StoryObj } from "@storybook/react";
import { CartButton } from ".";

const meta = {
  title: "components/CartButton",
  component: CartButton,
  tags: ["autodocs"],
} satisfies Meta<typeof CartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
