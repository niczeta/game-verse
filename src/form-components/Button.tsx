// Reusable Button component with multiple size, color, and variant options
// Uses clsx for conditional class composition and supports icons, custom styling, and accessibility

import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

// Type definition for Button component props
// Extends native HTML button attributes and adds custom button-specific props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string; // Button text content
  onClick?: () => void; // Click handler callback
  type?: "button" | "submit" | "reset"; // HTML button type
  children?: ReactNode; // Child elements (alternative to text prop)
  className?: string; // Additional custom CSS classes
  color?: "primary" | "secondary" | "danger" | "cyan" | "yellow"; // Button color scheme
  size?: "mobile" | "small" | "medium" | "large"; // Button size preset
  disabled?: boolean; // Disable button and show disabled state
  icon?: ReactNode; // Optional icon element
  iconPosition?: "left" | "right"; // Position of icon relative to text
  variant?: "default" | "rounded" | "gradient" | "outline"; // Button style variant
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
  // SIZE PRESETS - Padding and text size for each button size option
  const sizeClasses = {
    mobile: "px-3 py-1.5 text-base",
    small: "px-4 py-2 text-base",
    medium: "px-8 py-3 text-lg",
    large: "px-10 py-4 text-xl",
  };

  // Build button classes using clsx with conditional styling based on props
  const buttonClasses = clsx(
    // Base styles - always applied regardless of variant or color
    "focus:outline-none focus:ring-2 flex items-center justify-center gap-2 cursor-pointer transition font-semibold",

    // Size classes - always applied based on size prop
    sizeClasses[size],

    {
      // VARIANT STYLES - Different button appearance options
      "rounded-lg": variant === "default", // Standard button with rounded corners
      "rounded-full": variant === "rounded", // Fully rounded pill-shaped button
      // Gradient variant with colorful background, border, and hover effects
      "rounded-md bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white shadow-md border-2 border-cyan-400 hover:brightness-110 hover:scale-105 hover:border-yellow-300":
        variant === "gradient",
      // Outline variant with border only, no background fill
      "border-2 rounded-lg hover:bg-opacity-10 transition":
        variant === "outline",

      // STANDARD COLOR STYLES - Applied for non-outline, non-gradient variants
      // Primary color - Cyan background with white text
      "bg-cyan-500 text-white border border-cyan-500 hover:bg-cyan-400":
        color === "primary" && variant !== "gradient" && variant !== "outline",
      // Secondary color - White background with cyan text
      "bg-white text-cyan-500 border border-cyan-400 hover:bg-cyan-50":
        color === "secondary" &&
        variant !== "gradient" &&
        variant !== "outline",
      // Danger color - Red background with white text
      "bg-red-600 text-white hover:bg-red-700":
        color === "danger" && variant !== "gradient" && variant !== "outline",

      // OUTLINE VARIANT COLOR STYLES - Applied only when variant is outline
      // Cyan outline - Cyan border and text with subtle hover background
      "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10":
        color === "cyan" && variant === "outline",
      // Yellow outline - Yellow border and text with subtle hover background
      "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10":
        color === "yellow" && variant === "outline",

      // DISABLED STATE - Reduced opacity and disabled cursor
      "opacity-50 cursor-not-allowed": disabled,
    },

    // Custom classes - merged last so they can override defaults if needed
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
      {/* Render icon on left side if provided and iconPosition is "left" */}
      {icon && iconPosition === "left" && icon}

      {/* Render button text if provided */}
      {text && <span>{text}</span>}

      {/* Render children as alternative content */}
      {children}

      {/* Render icon on right side if provided and iconPosition is "right" */}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
