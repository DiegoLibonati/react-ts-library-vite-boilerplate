import type { CSSProperties, ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "@/types/app";

interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export interface ButtonProps extends DefaultProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  disabled?: boolean;
}

export interface TruncateDemoProps {
  text: string;
  maxLength: number;
}

export interface ToggleDemoProps {
  initialValue: boolean;
}
