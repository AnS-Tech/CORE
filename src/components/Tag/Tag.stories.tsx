import { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";

const meta = {
  title: "components/Tag",
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "",
    promoStatus: "5",
  },
};
