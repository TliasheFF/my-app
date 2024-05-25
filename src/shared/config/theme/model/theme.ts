import { ThemeConfig } from "../types";

export const theme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: "var(--button-background-color)",
      colorTextDisabled: "var(--font-color-secondary)",
      borderColorDisabled: "var(--disabled-button-border-color)",
      primaryShadow: "none",
    },
    Form: {
      labelColor: "var(--font-color-primary)",
    },
  },
}