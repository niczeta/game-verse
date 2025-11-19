import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

// Migliora type così puoi usare anche "password", "email", ecc
type CustomInputProps = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  id?: string;
  autoComplete?: string;
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
  rightIcon?: React.ReactNode; // Supporta icona per esempio occhio password
};

export const CustomInput = ({
  type,
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
  min,
  max,
  step,
  rightIcon,
}: CustomInputProps) => {
  const inputId = id || name;

  // Gestisce validazione type-specifica
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
            htmlFor={inputId}
            className={clsx("block mb-2 font-semibold", labelClassName || "text-neutral-200")}
          >
            {label}
          </Label>
        )}
        <Input as={Fragment}>
          {({ focus, hover }) => (
            <div className="relative">
              <input
                id={inputId}
                name={name}
                type={type}
                autoComplete={autoComplete}
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
                  className
                )}
                aria-invalid={!!error}
                aria-describedby={error ? `${inputId}-error` : undefined}
              />
              {rightIcon && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  {rightIcon}
                </span>
              )}
            </div>
          )}
        </Input>
        {error && (
          <p id={`${inputId}-error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </Field>
    </div>
  );
};
