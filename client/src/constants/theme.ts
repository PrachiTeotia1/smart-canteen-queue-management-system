export const colors = {
  primary: "#FF7A00",
  primaryDark: "#E66A00",

  secondary: "#FFC233",
  secondaryDark: "#E0A900",

  background: "#FFF9F3",
  surface: "#FFFFFF",

  text: "#1F2937",
  textMuted: "#6B7280",

  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",

  border: "#F1E5D8",
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "48px",
  "4xl": "64px",
} as const;

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const typography = {
  fontFamily: {
    primary: "Poppins, sans-serif",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
  },
} as const;