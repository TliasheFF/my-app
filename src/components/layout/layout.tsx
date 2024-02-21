import { FC } from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/button";
import { Link, Outlet } from "react-router-dom";

// добавить тэг nav и добавить ul/li
export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.header__navigation}>
            <li>
              <Link to="/users">
                <Button>Пользователи</Button>
              </Link>
            </li>
            <li>
              <Link to="/new-user">
                <Button>Создать пользователя</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};
