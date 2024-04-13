import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./styles/app.scss";

export const App = () => {
  return <RouterProvider router={router} />;
};
