import type { JSX } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import type { ToggleDemoProps } from "@/types/props";

import { useToggle } from "@/hooks/useToggle/useToggle";

type Story = StoryObj<typeof ToggleDemo>;

const ToggleDemo = ({ initialValue }: ToggleDemoProps): JSX.Element => {
  const { value, toggle, setTrue, setFalse } = useToggle(initialValue);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1.5rem",
        fontFamily: "inherit",
      }}
    >
      <p>
        Value: <strong>{String(value)}</strong>
      </p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={toggle}>Toggle</button>
        <button onClick={setTrue}>Set True</button>
        <button onClick={setFalse}>Set False</button>
      </div>
    </div>
  );
};

const meta: Meta<typeof ToggleDemo> = {
  title: "Hooks/useToggle",
  component: ToggleDemo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initialValue: {
      control: "boolean",
    },
  },
};

export const Default: Story = {
  args: {
    initialValue: false,
  },
};

export const InitiallyTrue: Story = {
  args: {
    initialValue: true,
  },
};

export default meta;
