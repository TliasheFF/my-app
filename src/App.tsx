import { UsersPage } from "./components/pages/users-page/component";
import { Layout } from "./components/layout/component";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewUserPage } from "./components/pages/new-user-page/component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "new-user", element: <NewUserPage /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
