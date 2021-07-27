import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.nav,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.nav,
  hover: "#473d5d",
};

export const styledPanelLight: NavTheme = {
  background: lightColors.panel,
  hover: "#473d5d",
};

export const styledPanelDark: NavTheme = {
  background: darkColors.panel,
  hover: "#473d5d",
};
