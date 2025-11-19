import { Field, Label } from "@headlessui/react";
import clsx from "clsx";

type CustomTextareaProps = {
  name: string;
  id?: string;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  label?: string;
  labelClassName?: string;
  error?: string;
  rows?: number;
};

export const CustomTextarea = ({
  name,
  id,
  autoComplete,
  placeholder,
  value,
  onChange,
  className,
  label,
  labelClassName,
  error,
  rows = 5,
}: CustomTextareaProps) => {
  const textareaId = id || name;
  return (
    <div className={clsx("w-full", className)}>
      <Field>
        {label && (
          <Label
            htmlFor={textareaId}
            className={clsx(
              "block mb-2 font-semibold",
              labelClassName || "text-neutral-200"
            )}
          >
            {label}
          </Label>
        )}
        <textarea
          id={textareaId}
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={clsx(
            "w-full border p-3 rounded-lg resize-none bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-neutral-700 focus:ring-cyan-700"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </Field>
    </div>
  );
};
