import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../entities/layout/layout";
import { UsersPage } from "../../pages/users-page/users-page";
import { NewUserPage } from "../../pages/new-user-page/new-user-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "new-user", element: <NewUserPage /> },
      { path: "users/:userId/edit", element: <NewUserPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
