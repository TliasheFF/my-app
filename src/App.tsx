import { UsersPage } from "./components/pages/users-page/users-page";
import { Layout } from "./components/layout/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewUserPage } from "./components/pages/new-user-page/new-user-page";

// вынести отдельно в файл
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
