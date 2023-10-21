import { Meta, StoryObj } from "@storybook/react";
import { QuickView } from ".";

const meta = {
  title: "components/QuickView",
  component: QuickView,
} satisfies Meta<typeof QuickView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
