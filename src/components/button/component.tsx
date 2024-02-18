import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
