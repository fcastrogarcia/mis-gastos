const colors = {
  basic: {
    white: "#fff",
    black: "#000",
  },
  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },
  orange: {
    100: "#fffaf0",
    200: "#fefcbf",
    300: "#fbd38d",
    400: "#f6ad55",
    500: "#ed8936",
    600: "#dd6b20",
  },
  indigo: {
    100: "#ebf4ff",
    200: "#c3dafe",
    600: "#5a67d8",
    700: "#4c51bf",
    800: "#3730a3",
    900: "#312e81",
  },
  blue: {
    100: "#ebf8ff",
    500: "#4299e1",
    600: "#3182ce",
    700: "#2b6cb0",
    800: "#2c5282",
    900: "#2a4365",
  },
  teal: {
    100: "#e6fffa",
    200: "#b2f5ea",
    300: "#81e6d9",
    400: "#4fd1c5",
    500: "#38b2ac",
    600: "#319795",
    700: "#2c7a7b",
  },
  red: {
    100: "#fff5f5",
    200: "#fed7d7",
    400: "#fc8181",
    500: "#f56565",
    600: "#e53e3e",
  },
  green: {
    100: "#f0fff4",
    200: "#c6f6d5",
    400: "#68d391",
    500: "#48bb78",
    600: "#38a169",
  },
  yellow: {
    100: "#fffff0",
    200: "#fefcbf",
    400: "#f6e05e",
    500: "#ecc94b",
    600: "#d69e2e",
  },
};

const shadows = {
  basic: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  xs: "rgba(0, 0, 0, 0.03) 0px 10px 25px 0px",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  vercel: "0 4px 8px rgb(0 0 0 / 12%)",
};

export default { colors, shadows };
