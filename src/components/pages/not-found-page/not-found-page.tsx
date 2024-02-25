import { FC } from "react";
import styles from "./not-found-page.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";

export const NotFoundPage: FC = () => {
  return (
    <main className={styles.p404}>
      <img src="/src/assets/images/404.svg" className={styles.p404__image} />
      <p className={styles.p404__text}>Кажется, такой страницы не существует...</p>
      <Link to="/">
        <Button>Вернуться на главную страницу</Button>
      </Link>
    </main>
  );
};
