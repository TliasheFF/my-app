import { FC } from "react";
import styles from "./modal.module.scss";

type Props = {
  text: string;
  modalState: boolean;
  setModalState: (value: boolean) => void;
};

export const Modal: FC<Props> = (props) => {
  const { text, modalState, setModalState } = props;

  return (
    modalState && (
      <div className={styles.modal} onClick={() => setModalState(!modalState)}>
        <div className={styles.modal__window}>{text}</div>
      </div>
    )
  );
};
