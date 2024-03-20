import { FC } from "react";
import styles from "./icons.module.scss";

type DeleteIconPropsTypes = {
  title?: string;
};

export const DeleteIcon: FC<DeleteIconPropsTypes> = (props) => {
  const { title } = props;

  return (
    <svg className={styles.icon} viewBox="0 0 24 24">
      <use href="/src/shared/svg/sprite.svg#delete" />
      <title>{title}</title>
    </svg>
  );
};
