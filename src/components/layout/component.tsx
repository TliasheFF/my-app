import { FC } from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/component";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Button>Пользователи</Button>
        <Button>Создать пользователя</Button>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
};
