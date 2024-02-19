import { FC } from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/component";
import { Link, Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/users">
          <Button>Пользователи</Button>
        </Link>
        <Link to="/new-user">
          <Button>Создать пользователя</Button>
        </Link>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};
