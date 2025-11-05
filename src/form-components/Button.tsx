import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "danger";
  size?: "mobile" | "small" | "medium" | "large";
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "default" | "rounded" | "gradient";
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
  // SIZE
  const sizeClasses = {
    mobile: "px-3 py-1.5 text-base",
    small: "px-4 py-2 text-base",
    medium: "px-7 py-2.5 text-lg",
    large: "px-10 py-4 text-xl",
  };

  const buttonClasses = clsx(
    "focus:outline-none focus:ring-2 flex items-center justify-center gap-2 cursor-pointer transition font-bold",
    sizeClasses[size], // <--- SEMPRE APPLICATA
    {
      // STILI VARIANT
      "rounded-lg": variant === "default",
      "rounded-full": variant === "rounded",
      "rounded-md bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white shadow-md border-2 border-cyan-400 hover:brightness-110 hover:scale-105 hover:border-yellow-300":
        variant === "gradient",
      // COLORI STANDARD
      "bg-cyan-500 text-white border border-cyan-500 hover:bg-cyan-400":
        color === "primary" && variant !== "gradient",
      "bg-white text-cyan-500 border border-cyan-400 hover:bg-cyan-50":
        color === "secondary" && variant !== "gradient",
      "bg-red-600 text-white hover:bg-red-700": color === "danger",
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
