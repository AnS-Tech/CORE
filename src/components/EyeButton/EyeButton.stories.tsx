import { Meta, StoryObj } from "@storybook/react";
import { EyeButton } from ".";

const meta = {
  title: "components/EyeButton",
  component: EyeButton,
} satisfies Meta<typeof EyeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
