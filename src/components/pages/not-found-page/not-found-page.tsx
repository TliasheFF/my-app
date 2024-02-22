import { FC } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.p404}>
      <img src="/src/assets/404.png" className={styles.p404__image} />
      <p className={styles.p404__text}>
        404 <span className={styles.p404__line}>|</span> Страница не найдена...
      </p>
      <Link to="/" className={styles.p404__link}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
};
