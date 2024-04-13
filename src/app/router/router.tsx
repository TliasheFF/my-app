import { NewUserPage } from "@/pages/new-user-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { UsersPage } from "@/pages/users-page";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "new-user", element: <NewUserPage /> },
      { path: "users/:userId", element: <NewUserPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
