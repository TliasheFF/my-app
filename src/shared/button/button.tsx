import { FC } from "react";
import styles from "./button.module.scss";

type ButtonPropsTypes = {
  children: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonPropsTypes> = (props) => {
  const { children, type, onClick, disabled } = props;

  return (
    <button type={type} className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
