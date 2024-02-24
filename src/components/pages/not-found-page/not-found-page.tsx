import { FC } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.p404}>
      <img src="/src/assets/404.png" className={styles.p404__image} />
      <p className={styles.p404__code}>404</p>
      <p className={styles.p404__text}>Кажется, такой страницы не существует...</p>
      <Link to="/">
        <Button>Вернуться на главную страницу</Button>
      </Link>
    </div>
  );
};
