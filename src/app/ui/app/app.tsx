import { RouterProvider } from "react-router-dom";
import "./app.scss";
import { router } from "@/app/router";

export const App = () => {
  return <RouterProvider router={router} />;
};
