// CustomSelect component - reusable dropdown select input with Headless UI
// Supports custom option rendering, keyboard navigation, and accessibility features

import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import { Fragment, type ReactElement } from "react";

// Type definition for select options
type Option = {
  id: number; // Unique identifier for the option
  name: string; // Display name of the option
};

// Type definition for CustomSelect component props
type CustomSelectProps = {
  options: Option[]; // Array of available options to display in dropdown
  selected: Option | null; // Currently selected option (can be null)
  onChange: (option: Option | null) => void; // Callback function when selection changes
  placeholder?: string; // Placeholder text shown when no option is selected
  className?: string; // Additional custom CSS classes for outer container
  label?: string; // Optional label text displayed above select
  labelClassName?: string; // Custom CSS classes for label styling
  renderOption?: (
    option: Option,
    selected: boolean,
    active: boolean
  ) => ReactElement; // Optional custom render function for option items
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
      {/* Optional label - displayed above select if provided */}
      {label && (
        <label className={clsx("block mb-2 font-semibold", labelClassName)}>
          {label}
        </label>
      )}

      {/* Headless UI Listbox component - manages select state and keyboard navigation */}
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          {/* Select button/trigger - displays selected option or placeholder */}
          <Listbox.Button
            className={clsx(
              // Base button styles
              "w-full cursor-default rounded-lg border border-neutral-300 bg-white py-4 px-4 text-left text-neutral-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm",
              "appearance-none" // Remove native select styling
            )}
          >
            {/* Selected option name or placeholder */}
            <span className="block truncate">
              {selected ? selected.name : placeholder}
            </span>

            {/* Custom dropdown arrow icon */}
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

          {/* Dropdown menu - container for all selectable options */}
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {/* Map through options and create selectable items */}
            {options.map((option) => (
              <Listbox.Option key={option.id} value={option} as={Fragment}>
                {/* Render function provides active and selected state */}
                {({ active, selected: isSelected }) =>
                  // Use custom render function if provided, otherwise use default
                  renderOption ? (
                    renderOption(option, isSelected, active)
                  ) : (
                    // Default option item rendering
                    <div
                      className={clsx(
                        // Base option styles
                        "cursor-default select-none relative py-2 text-left pl-4",
                        // Active state styling (hovering over option)
                        active
                          ? "bg-cyan-100 text-cyan-900"
                          : "text-neutral-700"
                      )}
                    >
                      {/* Option name text */}
                      <span
                        className={clsx(
                          "block truncate",
                          // Bold text if this option is selected
                          isSelected ? "font-semibold" : "font-normal"
                        )}
                      >
                        {option.name}
                      </span>

                      {/* Checkmark icon displayed when option is selected */}
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
