import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "accent";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#F5F1EC] text-[#4B5563]",
  success: "bg-[#EAF7EF] text-[#21864B]",
  warning: "bg-[#FFF3E6] text-[#E86F00]",
  danger: "bg-[#FDECEC] text-[#D9363E]",
  info: "bg-[#EAF3FF] text-[#2878C8]",
  accent: "bg-[#FFF4D6] text-[#A96B00]",
};

const dotStyles: Record<BadgeVariant, string> = {
  default: "bg-[#6B7280]",
  success: "bg-[#21864B]",
  warning: "bg-[#E86F00]",
  danger: "bg-[#D9363E]",
  info: "bg-[#2878C8]",
  accent: "bg-[#A96B00]",
};

export function Badge({
  children,
  variant = "default",
  dot = false,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        px-3
        py-1
        text-sm
        font-medium
        leading-5
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${dotStyles[variant]}`}
        />
      )}

      {children}
    </span>
  );
}