// CustomInput component - reusable form input with support for text, date, and number types
// Includes validation, error handling, label, and accessibility features using Headless UI

import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

// Type definition for CustomInput component props
type CustomInputProps = {
  type: "text" | "date" | "number"; // Input type - determines validation and input behavior
  name: string; // Name attribute for form submission
  placeholder?: string; // Placeholder text shown when input is empty
  value: string | number; // Current input value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback function when input value changes
  className?: string; // Additional custom CSS classes
  label?: string; // Optional label text displayed above input
  labelClassName?: string; // Custom CSS classes for label styling
  error?: string; // Optional error message displayed below input for validation feedback
  min?: number; // Minimum value constraint (for number type)
  max?: number; // Maximum value constraint (for number type)
  step?: number; // Step increment (for number type)
  maskAsPassword?: boolean; // Flag to apply password mask styling to hide input characters
};

export const CustomInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  label,
  labelClassName,
  error,
  min,
  max,
  step,
  maskAsPassword = false,
}: CustomInputProps) => {
  // Handle input change with type-specific validation
  // Prevents invalid inputs based on type (date format, numeric only)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Validate date input - prevent years longer than 4 digits
    if (type === "date") {
      const yearPart = e.target.value.split("-")[0];
      if (yearPart && yearPart.length > 4) return;
    }

    // Validate number input - allow only numeric characters
    if (type === "number") {
      const numberValue = e.target.value;
      if (!/^\d*$/.test(numberValue)) return;
    }

    // Call parent onChange handler if validation passes
    onChange(e);
  };

  return (
    <div className={clsx("w-full", className)}>
      {/* Headless UI Field component for form control management */}
      <Field>
        {/* Optional label - displayed above input if provided */}
        {label && (
          <Label
            htmlFor={name}
            className={clsx(
              "block mb-2 font-semibold",
              labelClassName || "text-neutral-200" // Default label color if custom not provided
            )}
          >
            {label}
          </Label>
        )}

        {/* Headless UI Input component wrapper */}
        <Input as={Fragment}>
          {/* Render function provides focus and hover state tracking */}
          {({ focus, hover }) => (
            <input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              min={min}
              max={max}
              step={step}
              className={clsx(
                // Base styles - always applied
                "w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400",

                // Focus state - cyan ring when focused
                focus && "ring-cyan-700",

                // Hover state - subtle shadow on hover
                hover && "shadow",

                // Error state - red border and ring if error exists, otherwise cyan
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-700 focus:ring-cyan-700",

                // Password masking - applies class to hide input characters
                maskAsPassword && "password-mask",

                // Custom classes from props
                className
              )}
              // Accessibility attributes for error state
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
            />
          )}
        </Input>

        {/* Error message - displayed below input if validation error exists */}
        {error && (
          <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </Field>
    </div>
  );
};
