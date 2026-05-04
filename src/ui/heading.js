import clsx from "clsx";

const baseStyles = "text-text font-semibold";

export const H1 = ({ children, className }) => (
  <h1 className={clsx(baseStyles, "text-4xl md:text-5xl", className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className }) => (
  <h2 className={clsx(baseStyles, "text-3xl md:text-4xl", className)}>
    {children}
  </h2>
);

export const H3 = ({ children, className }) => (
  <h3 className={clsx(baseStyles, "text-2xl md:text-3xl", className)}>
    {children}
  </h3>
);

export const H4 = ({ children, className }) => (
  <h4 className={clsx(baseStyles, "text-xl md:text-2xl", className)}>
    {children}
  </h4>
);

export const H5 = ({ children, className }) => (
  <h5 className={clsx(baseStyles, "text-lg", className)}>{children}</h5>
);

export const H6 = ({ children, className }) => (
  <h6 className={clsx(baseStyles, "text-base", className)}>{children}</h6>
);
