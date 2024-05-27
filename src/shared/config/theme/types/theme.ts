import { OverrideToken } from "antd/es/theme/interface";

export type ComponentsConfig = {
    [key in keyof OverrideToken]?: OverrideToken[key];
};

export type ThemeConfig = {
    components: ComponentsConfig;
};