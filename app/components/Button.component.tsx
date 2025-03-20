import { ButtonProps } from "../interfaces/Button.interface";

export function Button({
  text,
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg transition-all duration-200 
        ${
          variant === "primary"
            ? "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-transparent"
        }`}
    >
      {text}
    </button>
  );
}
