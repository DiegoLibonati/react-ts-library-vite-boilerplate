import type { JSX } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { TruncateDemoProps } from "@/types/props";

import { truncate } from "@/helpers/truncate/truncate";

type Story = StoryObj<typeof TruncateDemo>;

const TruncateDemo = ({ text, maxLength }: TruncateDemoProps): JSX.Element => (
  <div style={{ padding: "1rem", fontFamily: "monospace", lineHeight: 2 }}>
    <p>
      <strong>Input:</strong> {text}
    </p>
    <p>
      <strong>Max length:</strong> {maxLength}
    </p>
    <p>
      <strong>Output:</strong> {truncate(text, maxLength)}
    </p>
  </div>
);

const meta: Meta<typeof TruncateDemo> = {
  title: "Helpers/truncate",
  component: TruncateDemo,
  parameters: {
    layout: "centered",
  },
};

export const Truncated: Story = {
  args: {
    text: "This is a long text that will be truncated by the helper",
    maxLength: 20,
  },
};

export const NotTruncated: Story = {
  args: {
    text: "Short text",
    maxLength: 20,
  },
};

export default meta;
