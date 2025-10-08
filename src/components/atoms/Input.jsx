export default function Input({ className = "", ...props }) {
  return <input {...props} className={`input ${className}`} />;
}

