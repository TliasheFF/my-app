import { RouterProvider } from "react-router-dom";
import "./app.scss";
import { router } from "@/app/router";
import { ConfigProvider } from "antd";
import { theme } from "@/shared/config/theme";

export const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />;
    </ConfigProvider>
  );
};
