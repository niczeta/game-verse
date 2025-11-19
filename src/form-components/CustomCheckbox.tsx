// Checkbox component - reusable form input for boolean selections
// Displays checkbox with label and optional error message for form validation feedback

// Type definition for Checkbox component props
type CustomCheckboxProps = {
  id: string; // Unique identifier for checkbox input
  name: string; // Name attribute for form submission
  checked: boolean; // Current checked state of the checkbox
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback function when checkbox state changes
  label: React.ReactNode; // Label text or content displayed next to checkbox
  error?: string; // Optional error message displayed below checkbox for validation
};

export const CustomCheckbox = ({
  id,
  name,
  checked,
  onChange,
  label,
  error,
}: CustomCheckboxProps) => (
  <div className="flex flex-col gap-1 ml-1">
    {/* Checkbox and label container */}
    <div className="flex items-center gap-3">
      {/* Checkbox input element */}
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="transform scale-125" // Enlarged checkbox for better visibility
      />

      {/* Label associated with checkbox for better accessibility and larger click area */}
      <label htmlFor={id} className="text-sm text-neutral-700">
        {label}
      </label>
    </div>

    {/* Error message - displayed below checkbox if validation error exists */}
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
