import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

type CustomTextareaProps = {
  name: string;
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
      <Field>
        {label && (
          <Label
            htmlFor={name}
            className={clsx(
              "block mb-2 font-semibold",
              labelClassName || "text-neutral-200" // 👈 colore chiaro di default
            )}
          >
            {label}
          </Label>
        )}

        <Input as={Fragment}>
          {({ focus, hover }) => (
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              rows={rows}
              className={clsx(
                "w-full border p-3 rounded-lg resize-none bg-neutral-800 text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2",
                focus && "ring-cyan-700",
                hover && "shadow",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-700 focus:ring-cyan-700"
              )}
              aria-invalid={!!error}
              aria-describedby={error ? `${name}-error` : undefined}
            />
          )}
        </Input>

        {error && (
          <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </Field>
    </div>
  );
};
