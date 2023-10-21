import { Meta, StoryObj } from "@storybook/react";
import { BigCartButton } from ".";

const meta = {
  title: "components/BigCartButton",
  component: BigCartButton,
} satisfies Meta<typeof BigCartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Adicionar ao carrinho",
  },
};
