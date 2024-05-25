import { FC } from "react";
import styles from "./not-found-page.module.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const NotFoundPage: FC = () => {
  return (
    <div className={styles["p404"]}>
      <img
        src="/src/shared/ui/images/404.svg"
        className={styles["p404__image"]}
        alt="страница не найдена"
      />
      <p className={styles["p404__text"]}>Кажется, такой страницы не существует...</p>
      <Link to="/">
        <Button type="primary">Вернуться на главную страницу</Button>
      </Link>
    </div>
  );
};
