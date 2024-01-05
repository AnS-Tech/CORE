import { Meta, StoryObj } from "@storybook/react";
import { Toast } from ".";

const meta = {
  title: "components/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Ao som do Cabeça de gelo ... olha a pedra",
  },
};
