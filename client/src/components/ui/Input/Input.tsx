import {
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: InputSize;
}

const sizeStyles: Record<
  InputSize,
  { input: string; label: string }
> = {
  sm: {
    input: "h-9 px-3 text-sm",
    label: "text-sm",
  },
  md: {
    input: "h-11 px-4 text-sm",
    label: "text-sm",
  },
  lg: {
    input: "h-13 px-4 text-base",
    label: "text-base",
  },
};

export function Input({
  id,
  label,
  error,
  helperText,
  startIcon,
  endIcon,
  size = "md",
  className = "",
  disabled = false,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const messageId = error
    ? `${inputId}-error`
    : helperText
      ? `${inputId}-helper`
      : undefined;

  const hasMessage = Boolean(error || helperText);

  const inputPadding = `
    ${startIcon ? "pl-10" : ""}
    ${endIcon ? "pr-10" : ""}
  `;

  const stateStyles = error
    ? "border-[#D9363E] focus:border-[#D9363E] focus:ring-[#D9363E]/20"
    : "border-[#E8D8C8] focus:border-[#FF7A00] focus:ring-[#FF7A00]/20";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`
            mb-1.5
            block
            font-medium
            text-[#1F2937]
            ${sizeStyles[size].label}
          `}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {startIcon && (
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-[#9CA3AF]
            "
          >
            {startIcon}
          </span>
        )}

        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={hasMessage ? messageId : undefined}
          className={`
            w-full
            rounded-xl
            border
            bg-white
            font-medium
            text-[#1F2937]
            outline-none
            placeholder:text-[#9CA3AF]
            transition
            duration-200
            focus:ring-4
            disabled:cursor-not-allowed
            disabled:bg-[#F5F1EC]
            disabled:text-[#9CA3AF]
            ${sizeStyles[size].input}
            ${inputPadding}
            ${stateStyles}
            ${className}
          `}
          {...props}
        />

        {endIcon && (
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#9CA3AF]
            "
          >
            {endIcon}
          </span>
        )}
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-sm font-medium text-[#D9363E]"
        >
          {error}
        </p>
      )}

      {!error && helperText && (
        <p
          id={`${inputId}-helper`}
          className="mt-1.5 text-sm text-[#6B7280]"
        >
          {helperText}
        </p>
      )}
    </div>
  );
}