import { FC } from "react";
import styles from "./icons.module.scss";

type EditIconPropsTypes = {
  title?: string;
};

export const EditIcon: FC<EditIconPropsTypes> = (props) => {
  const { title } = props;

  return (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <use href="/src/shared/svg/sprite.svg#edit" />
      <title>{title}</title>
    </svg>
  );
};
