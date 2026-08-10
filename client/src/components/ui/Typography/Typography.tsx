import type { ElementType, ReactNode } from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-sm"
  | "caption";

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  as?: ElementType;
  className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "text-5xl font-bold leading-tight tracking-tight text-[#1F2937]",

  h1:
    "text-4xl font-bold leading-tight tracking-tight text-[#1F2937]",

  h2:
    "text-3xl font-semibold leading-tight text-[#1F2937]",

  h3:
    "text-2xl font-semibold leading-snug text-[#1F2937]",

  body:
    "text-base font-normal leading-relaxed text-[#4B5563]",

  "body-sm":
    "text-sm font-normal leading-relaxed text-[#6B7280]",

  caption:
    "text-xs font-medium leading-normal text-[#9CA3AF]",
};

const defaultElements: Record<TypographyVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

export function Typography({
  children,
  variant = "body",
  as,
  className = "",
}: TypographyProps) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}