import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

type CustomInputProps = {
  type: "text" | "date" | "number";
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  labelClassName?: string;
  error?: string;
  min?: number;
  max?: number;
  step?: number;
  maskAsPassword?: boolean; // << AGGIUNTA
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
  maskAsPassword = false, // << AGGIUNTA
}: CustomInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "date") {
      const yearPart = e.target.value.split("-")[0];
      if (yearPart && yearPart.length > 4) return;
    }
    if (type === "number") {
      const numberValue = e.target.value;
      if (!/^\d*$/.test(numberValue)) return;
    }
    onChange(e);
  };

  return (
    <div className={clsx("w-full", className)}>
      <Field>
        {label && (
          <Label
            htmlFor={name}
            className={clsx(
              "block mb-2 font-semibold",
              labelClassName || "text-neutral-200"
            )}
          >
            {label}
          </Label>
        )}
        <Input as={Fragment}>
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
                "w-full border p-3 rounded-lg focus:outline-none focus:ring-2 bg-neutral-800 text-neutral-200 placeholder:text-neutral-400",
                focus && "ring-cyan-700",
                hover && "shadow",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-700 focus:ring-cyan-700",
                maskAsPassword && "password-mask", // << AGGIUNTA
                className
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
