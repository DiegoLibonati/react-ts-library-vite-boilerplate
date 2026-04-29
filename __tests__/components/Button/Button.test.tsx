import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { RenderResult } from "@testing-library/react";
import type { ButtonHTMLAttributes } from "react";
import type { ButtonProps } from "@/types/props";

import Button from "@/components/Button/Button";

type RenderProps = Partial<ButtonProps> & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const renderComponent = (props: RenderProps = {}): RenderResult => {
  const defaultProps = { children: "Click me", ...props };
  return render(<Button {...(defaultProps as unknown as ButtonProps)} />);
};

describe("Button", () => {
  describe("rendering", () => {
    it("should render children", () => {
      renderComponent({ children: "Submit" });
      expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    });

    it("should render a button element", () => {
      renderComponent();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should apply a custom className", () => {
      renderComponent({ className: "my-custom-class" });
      expect(screen.getByRole("button")).toHaveClass("my-custom-class");
    });

    it("should render as disabled when disabled prop is true", () => {
      renderComponent({ disabled: true });
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("behavior", () => {
    it("should call onClick when clicked", async () => {
      const mockOnClick = jest.fn();
      const user = userEvent.setup();
      renderComponent({ onClick: mockOnClick });
      await user.click(screen.getByRole("button"));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("should not call onClick when disabled", async () => {
      const mockOnClick = jest.fn();
      const user = userEvent.setup();
      renderComponent({ onClick: mockOnClick, disabled: true });
      await user.click(screen.getByRole("button"));
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });

  describe("accessibility", () => {
    it("should forward aria-label to the button element", () => {
      renderComponent({ "aria-label": "Submit form" });
      expect(screen.getByRole("button", { name: "Submit form" })).toBeInTheDocument();
    });
  });
});
