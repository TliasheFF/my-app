import { FC } from "react";
import styles from "./modal.module.scss";
import { Button } from "../button/button";

type Props = {
  mode?: "alert" | "confirm";
  text: string;
  modalState: boolean;
  setModalState: (value: boolean) => void;
  handleSubmit?: () => void;
};

export const Modal: FC<Props> = (props) => {
  const { mode = "alert", text, modalState, setModalState, handleSubmit } = props;

  return (
    modalState && (
      <div className={styles.modal}>
        <div className={styles.modal__window}>
          <p className={styles.modal__text}>{text}</p>
          {mode === "confirm" && (
            <div className={styles.modal__buttons}>
              <Button onClick={handleSubmit}>Ок</Button>
              <Button onClick={() => setModalState(false)}>Отмена</Button>
            </div>
          )}
        </div>
      </div>
    )
  );
};
