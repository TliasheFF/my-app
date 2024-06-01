import { NotFoundPage } from "@/pages/not-found-page";
import { UsersPage } from "@/pages/users-page";
import { UserPage } from "@/pages/user-page";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../ui/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "user", element: <UserPage /> },
      { path: "users/:userId", element: <UserPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
