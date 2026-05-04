import clsx from "clsx";

const Input = ({ className, type = "text", ...props }) => {
  return (
    <input
      type={type}
      className={clsx(
        "w-full px-4 py-2 rounded-[var(--radius-md)] border",
        "border-[var(--color-border)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
        className,
      )}
      {...props}
    />
  );
};

export default Input;
