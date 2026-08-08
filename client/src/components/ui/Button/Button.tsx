import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#FF7A00] text-white hover:bg-[#E66A00] focus-visible:ring-[#FF7A00]",

  secondary:
    "bg-[#FFC233] text-[#1F2937] hover:bg-[#E0A900] focus-visible:ring-[#FFC233]",

  outline:
    "border border-[#FF7A00] bg-transparent text-[#FF7A00] hover:bg-[#FFF3E6] focus-visible:ring-[#FF7A00]",

  ghost:
    "bg-transparent text-[#FF7A00] hover:bg-[#FFF3E6] focus-visible:ring-[#FF7A00]",

  danger:
    "bg-[#EF4444] text-white hover:bg-[#DC2626] focus-visible:ring-[#EF4444]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-medium
        transition-all
        duration-200
        ease-out
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}

      {children}
    </button>
  );
}