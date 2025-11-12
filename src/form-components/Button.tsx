// Reusable Button component with multiple size, color, and variant options
// Uses clsx for conditional class composition and supports icons, custom styling, and accessibility

import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";

// Type definition for Button component props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "cyan" | "yellow";
  size?: "mobile" | "small" | "medium" | "large";
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "default" | "rounded" | "gradient" | "outline";
};

export const Button = ({
  text,
  onClick,
  type = "button",
  children,
  className,
  color,
  size = "medium",
  disabled = false,
  icon,
  iconPosition = "left",
  variant = "default",
  ...props
}: ButtonProps) => {
  // SIZE PRESETS
  const sizeClasses = {
    mobile: "px-4 py-2 text-sm",
    small: "px-5 py-2.5 text-base",
    medium: "px-8 py-3 text-lg",
    large: "px-10 py-4 text-xl",
  };

  // Build button classes
  const buttonClasses = clsx(
    "font-bold focus:outline-none focus:ring-2 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 select-none rounded-lg",
    sizeClasses[size],
    {
      // VARIANT STYLES
      "bg-neutral-900 text-white hover:bg-neutral-800 border border-transparent":
        variant === "default" && !color,
      "rounded-full": variant === "rounded",
      "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white shadow-md border-2 border-cyan-400 hover:brightness-110 hover:scale-105 hover:border-yellow-300":
        variant === "gradient",
      "border-2 bg-transparent hover:bg-opacity-10": variant === "outline",

      // STANDARD COLORS
      "bg-cyan-500 text-white border border-cyan-500 hover:bg-cyan-400":
        color === "primary" && variant !== "gradient" && variant !== "outline",
      "bg-white text-cyan-500 border border-cyan-400 hover:bg-cyan-50":
        color === "secondary" &&
        variant !== "gradient" &&
        variant !== "outline",
      "bg-red-600 text-white hover:bg-red-700":
        color === "danger" && variant !== "gradient" && variant !== "outline",

      // OUTLINE VARIANT COLORS
      "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10":
        color === "cyan" && variant === "outline",
      "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10":
        color === "yellow" && variant === "outline",

      // DISABLED STATE
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {text && <span>{text}</span>}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
