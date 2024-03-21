import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./styles/App.scss";

export const App = () => {
  return <RouterProvider router={router} />;
};
