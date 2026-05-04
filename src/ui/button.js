import clsx from "clsx";

const Button = ({
  children,
  className,
  variant = "primary", // primary | secondary | outline
  size = "md", // sm | md | lg
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition rounded-[var(--radius-md)]";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)]",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text)] hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
