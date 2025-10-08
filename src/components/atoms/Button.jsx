export default function Button({ children, className = "", variant = "primary", ...props }) {
  const base = "px-3 py-2 rounded text-sm font-medium focus:outline-none focus:ring-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  return (
    <button {...props} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </button>
  );
}

