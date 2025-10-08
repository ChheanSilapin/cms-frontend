export default function FilterBar({ children, onReset }) {
  return (
    <div className="flex items-center gap-2 flex-wrap mb-3">
      {children}
      {onReset && (
        <button type="button" onClick={onReset} className="text-sm text-gray-600 underline">Reset</button>
      )}
    </div>
  );
}

