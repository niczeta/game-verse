type CheckboxProps = {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  error?: string;
};

export const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  label,
  error,
}: CheckboxProps) => (
  <div className="flex flex-col gap-1 ml-1">
    <div className="flex items-center gap-3">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="transform scale-125"
      />
      <label htmlFor={id} className="text-sm text-neutral-700">
        {label}
      </label>
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
