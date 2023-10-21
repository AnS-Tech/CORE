import { Meta, StoryObj } from "@storybook/react";
import { Close } from ".";

const meta = {
  title: "components/Close",
  component: Close,
} satisfies Meta<typeof Close>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
