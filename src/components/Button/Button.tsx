import type { JSX } from "react";
import type { ButtonProps } from "@/types/props";

import styles from "@/components/Button/Button.module.css";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    props.disabled ? styles["button--disabled"] : undefined,
    className,
  ]
    .filter((c): c is string => Boolean(c))
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
