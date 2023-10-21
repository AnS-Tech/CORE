import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "success",
    placeholder: "E-mail",
    type: "email",
  },
};
