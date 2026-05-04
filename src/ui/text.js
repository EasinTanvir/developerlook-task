import clsx from "clsx";

const Text = ({ children, className, variant = "default" }) => {
  const variants = {
    default: "text-base text-text",
    muted: "text-base text-muted",
    small: "text-sm text-muted",
  };

  return <p className={clsx(variants[variant], className)}>{children}</p>;
};

export default Text;
