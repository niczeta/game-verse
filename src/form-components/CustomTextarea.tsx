// CustomTextarea component - reusable textarea input with label, error handling, and focus states
// Built with Headless UI for consistent form control and accessibility features

import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

// Type definition for CustomTextarea component props
type CustomTextareaProps = {
  name: string; // Name attribute for form submission
  placeholder?: string; // Placeholder text shown when textarea is empty
  value: string; // Current textarea value
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Callback function when textarea content changes
  className?: string; // Additional custom CSS classes for outer container
  label?: string; // Optional label text displayed above textarea
  labelClassName?: string; // Custom CSS classes for label styling
  error?: string; // Optional error message displayed below textarea for validation feedback
  rows?: number; // Number of visible rows (height) for the textarea
};

export const CustomTextarea = ({
  name,
  placeholder,
  value,
  onChange,
  className,
  label,
  labelClassName,
  error,
  rows = 5,
}: CustomTextareaProps) => {
  return (
    <div className={clsx("w-full", className)}>
      {/* Headless UI Field component for form control management */}
      <Field>
        {/* Optional label - displayed above textarea if provided */}
        {label && (
          <Label
            htmlFor={name}
            className={clsx(
              "block mb-2 font-semibold",
              labelClassName || "text-neutral-200" // Default light text color if custom not provided
            )}
          >
            {label}
          </Label>
        )}

        {/* Headless UI Input component wrapper for textarea */}
        <Input as={Fragment}>
          {/* Render function provides focus and hover state tracking */}
          {({ focus, hover }) => (
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              rows={rows} // Controls visible height of textarea
              className={clsx(
                // Base textarea styles
                "w-full border p-3 rounded-lg resize-none bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2",

                // Focus state - cyan ring when focused
                focus && "ring-cyan-700",

                // Hover state - subtle shadow on hover
                hover && "shadow",

                // Error state - red border and ring if error exists, otherwise cyan
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-700 focus:ring-cyan-700"
              )}
              // Accessibility attributes for error state
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
            />
          )}
        </Input>

        {/* Error message - displayed below textarea if validation error exists */}
        {error && (
          <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </Field>
    </div>
  );
};
