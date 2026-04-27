import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/Button/Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    children: "Danger Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Large",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Disabled",
    disabled: true,
  },
};

export default meta;
