import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "components/Button",
  component: Button,

  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    loading: {
      control: "boolean",
    },
    bordered: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};
