import React from "react";

import cx from "../../../utils/cx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "white"
    | "gray"
    | "error"
    | "success";
  outlined?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  wide?: boolean;
  squared?: boolean;
  circle?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonType,
  outlined,
  size = "md",
  wide,
  squared,
  circle,
  isLoading,
  disabled,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cx(
        "text-white font-bold py-2 px-4 rounded",
        buttonType === "primary"
          ? "bg-primary"
          : buttonType === "secondary"
          ? "bg-secondary"
          : buttonType === "accent"
          ? "bg-accent"
          : buttonType === "ghost"
          ? "bg-ghost"
          : buttonType === "error"
          ? "bg-error"
          : buttonType === "gray"
          ? "border-none bg-gray-500"
          : buttonType === "success"
          ? "border-none bg-green-500"
          : buttonType === "white"
          ? outlined
            ? "border-white bg-transparent text-white hover:border-white hover:bg-primary"
            : "border-none bg-white text-primary hover:bg-gray-50"
          : "",
        outlined ? "btn-outline" : "",
        size === "xs"
          ? "btn-xs"
          : size === "sm"
          ? "btn-sm"
          : size === "lg"
          ? "height-[2rem] btn-lg"
          : "",
        wide ? "btn-wide" : "",
        squared ? "btn-square" : "",
        circle ? "btn-circle" : "",
        disabled ? "btn-disabled" : "",
        isLoading ? "btn-disabled" : "",
        className ?? ""
      )}
      disabled={disabled}
      {...rest}
    >
      <span
        className={cx(
          "relative flex gap-2 whitespace-nowrap",
          isLoading ? "opacity-70" : ""
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
