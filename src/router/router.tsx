import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { UsersPage } from "../components/pages/users-page/users-page";
import { NewUserPage } from "../components/pages/new-user-page/new-user-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "new-user", element: <NewUserPage /> },
    ],
  },
]);
