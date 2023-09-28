import { Meta, StoryObj } from "@storybook/react";
import { WishList } from ".";

const meta = {
  title: "components/WishList",
  component: WishList,
  tags: ["autodocs"],
} satisfies Meta<typeof WishList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
