import { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from ".";

const meta = {
  title: "components/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
