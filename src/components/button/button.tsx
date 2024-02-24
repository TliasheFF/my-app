import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<Props> = (props) => {
  const { children, type, onClick, disabled } = props;

  return (
    <button type={type} className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
