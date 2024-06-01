import { FC } from "react";
import styles from "./layout.module.scss";
import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";

export const Layout: FC = () => {
  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <nav>
          <ul className={styles["navigation"]}>
            <li>
              <Link to="/">
                <Button type="primary">Пользователи</Button>
              </Link>
            </li>
            <li>
              <Link to="/user">
                <Button type="primary">Создать пользователя</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles["main"]}>
        <Outlet />
      </main>
    </div>
  );
};
