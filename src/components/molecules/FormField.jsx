import Input from "../atoms/Input";

export default function FormField({ label, error, children, ...inputProps }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-700">{label}</span>
      {children || <Input {...inputProps} className="mt-1 w-full" />}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

