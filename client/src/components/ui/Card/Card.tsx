import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "default" | "outlined" | "elevated";

export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white border border-[#F1E5D8]",

  outlined:
    "bg-white border border-[#E8D8C8]",

  elevated:
    "bg-white border border-[#F1E5D8] shadow-[0_8px_24px_rgba(74,48,24,0.08)]",
};

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        w-full
        rounded-2xl
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}