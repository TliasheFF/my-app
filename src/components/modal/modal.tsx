import { FC } from "react";
import styles from "./modal.module.scss";
import { Button } from "../button/button";
import classNames from "classnames";

type Props = {
  mode?: "alert" | "confirm";
  children: React.ReactNode;
  modalState: boolean;
  setModalState: (value: boolean) => void;
  handleSubmit?: () => void;
};

export const Modal: FC<Props> = (props) => {
  const { mode = "alert", children, modalState, setModalState, handleSubmit } = props;
  const activeModalStyle = modalState && styles.modal_active;

  return (
    <div className={classNames(styles.modal, activeModalStyle)}>
      <div className={styles.modal__content}>{children}</div>
      {mode === "confirm" && (
        <div className={styles.modal__buttons}>
          <Button onClick={handleSubmit}>Ок</Button>
          <Button onClick={() => setModalState(!modalState)}>Отмена</Button>
        </div>
      )}
    </div>
  );
};
