import { Theme } from "../types";

export const theme: Theme = {
  components: {
    Button: {
      colorPrimary: "var(--button-background-color)",
      colorPrimaryHover: "var(--background-hover-color)",
      colorTextDisabled: "var(--font-color-secondary)",
      borderColorDisabled: "var(--disabled-button-border-color)",
      primaryShadow: "none",
      algorithm: true,
    },
    Form: {
      labelColor: "var(--font-color-primary)",
    },
    Switch: {
      colorPrimary: "var(--button-background-color)",
      colorPrimaryHover: "var(--background-color-hover-primary)",
    },
    DatePicker: {
      colorPrimary: "var(--button-background-color)",
      colorPrimaryHover: "var(--background-color-hover-primary)",
    },
  },
}