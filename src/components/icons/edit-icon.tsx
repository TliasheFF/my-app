import { FC } from "react";
import styles from "./icons.module.scss";

type Props = {
  title?: string;
  handleClick?: () => void;
};

export const EditIcon: FC<Props> = (props) => {
  const { title, handleClick } = props;

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" onClick={handleClick}>
      <use href="/src/assets/images/sprite.svg#edit" />
      <title>{title}</title>
    </svg>
  );
};
