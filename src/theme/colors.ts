import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#7251b5",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#d6931a", //
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F5F0F1",
  secondary: "#a06cd5", //
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A", //
  textDisabled: "#BDC2C4",
  textSubtle: "#a06cd5",
  borderColor: "#E9EAEB",
  card: "#F5F0F1",
  nav: "#a06cd5", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F5F0F1 0%, #F5F0F1 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#A06CD5",
  secondary: "#ffffff", //
  background: "#6247aa", //
  backgroundDisabled: "#D2B7E5", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#483F5A",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  text: "#fcfae2", //
  textDisabled: "#717161", //
  textSubtle: "#ffffff", //
  borderColor: "#61634b",
  card: "#7251B5", //
  nav: "#7251B5", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #191E45 0%, #191E45 100%)", //
  },
};
