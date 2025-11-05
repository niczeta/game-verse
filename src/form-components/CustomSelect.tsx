import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import { Fragment, ReactElement } from "react";

type Option = {
  id: number;
  name: string;
};

type CustomSelectProps = {
  options: Option[];
  selected: Option | null;
  onChange: (option: Option | null) => void; // supporta anche null se necessario
  placeholder?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  renderOption?: (
    option: Option,
    selected: boolean,
    active: boolean
  ) => ReactElement;
};

export const CustomSelect = ({
  options,
  selected,
  onChange,
  placeholder = "Select...",
  className,
  label,
  labelClassName,
  renderOption,
}: CustomSelectProps) => {
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label className={clsx("block mb-2 font-semibold", labelClassName)}>
          {label}
        </label>
      )}

      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className={clsx(
              "w-full cursor-default rounded-lg border border-neutral-300 bg-white py-4 px-4 text-left text-neutral-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm",
              "appearance-none"
            )}
          >
            <span className="block truncate">
              {selected ? selected.name : placeholder}
            </span>
            {/* Custom arrow */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-neutral-600"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Listbox.Button>

          <Listbox.Options
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {options.map((option) => (
              <Listbox.Option key={option.id} value={option} as={Fragment}>
                {({ active, selected: isSelected }) =>
                  renderOption ? (
                    renderOption(option, isSelected, active)
                  ) : (
                    <div
                      className={clsx(
                        "cursor-default select-none relative py-2 text-left pl-4",
                        active ? "bg-cyan-100 text-cyan-900" : "text-neutral-700"
                      )}
                    >
                      <span
                        className={clsx(
                          "block truncate",
                          isSelected ? "font-semibold" : "font-normal"
                        )}
                      >
                        {option.name}
                      </span>
                      {isSelected && (
                        <span className="absolute inset-y-0 right-3 flex items-center text-cyan-700">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  )
                }
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
