import type { ReactElement } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant: Variant;
  size: Size;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyle: Record<Variant, string> = {
  primary: "bg-purple-500 text-white",
  secondary: "bg-purple-400 text-white",
};

const sizeStyle: Record<Size, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyle[props.variant]} ${sizeStyle[props.size]} rounded flex items-center`}
      onClick={props.onClick}
    >
      {props.startIcon && <span className="mr-1">{props.startIcon}</span>}
      {props.text}
      {props.endIcon && <span className="ml-2">{props.endIcon}</span>}
    </button>
  );
};
