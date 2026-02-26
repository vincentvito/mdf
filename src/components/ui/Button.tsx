import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center px-6 py-3 font-body font-medium tracking-wide uppercase text-sm transition-colors duration-200 overflow-hidden group";
  const variants = {
    primary: "bg-accent text-primary-dark hover:bg-accent-light",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const shimmer = (
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {shimmer}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {shimmer}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
