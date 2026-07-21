function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;