import { UsersPage } from "./components/pages/users-page/component";
import { Layout } from "./components/layout/component";
import { Route, Routes } from "react-router-dom";
import { NewUserPage } from "./components/pages/new-user-page/component";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="new-user" element={<NewUserPage />} />
        </Route>
      </Routes>
    </>
  );
};
