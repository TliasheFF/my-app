import { OverrideToken } from "antd/es/theme/interface";

type ComponentsConfig = {
    [key in keyof OverrideToken]?: OverrideToken[key];
};

export type ThemeConfig = {
    components: ComponentsConfig;
};