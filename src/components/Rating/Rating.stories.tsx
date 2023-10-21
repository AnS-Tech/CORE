import { Meta, StoryObj } from "@storybook/react";
import { Rating } from ".";

const meta = {
  title: "components/Rating",
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
