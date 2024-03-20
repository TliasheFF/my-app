import { FC, useState } from "react";
import styles from "./user-preview-card.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { roles } from "../../shared/mocks/roles";
import { Link } from "react-router-dom";
import { Modal } from "../../shared/modal/modal";
import { deleteUser } from "../../app/redux/users/users-slice";
import { selectUserById } from "../../app/redux/users/selectors";
import { State } from "../../app/redux/store";
import { EditIcon } from "../../shared/icons/edit-icon";
import { DeleteIcon } from "../../shared/icons/delete-icon";

type UserPreviewCardPropsTypes = {
  userId: string;
};

export const UserPreviewCard: FC<UserPreviewCardPropsTypes> = (props) => {
  const { userId } = props;
  const user = useSelector((state: State) => selectUserById(state, userId));
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  if (!user) {
    return null;
  }

  const { lastName, firstName, patronymic, blocked, email } = user;
  const userRole = roles.find((role) => role.id === user.role);
  const userName = `${lastName} ${firstName.slice(0, 1)}. ${patronymic && `${patronymic.slice(0, 1)}.`}`;
  const fullName = `${lastName} ${firstName} ${patronymic}`;
  const currentStateStyle = styles[blocked ? "card__state_inactive" : "card__state_active"];

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <p className={styles.card__name} title={fullName}>
          {userName}
        </p>
        <span className={classNames(styles.card__state, currentStateStyle)}>{blocked ? "заблокирован" : "активен"}</span>
      </div>

      <div className={styles.card__info}>
        <div>{userRole && userRole.name}</div>
        <div className={styles.card__mail}>{email}</div>
      </div>

      <hr className={styles.card__line} />

      <div className={styles.card__footer}>
        <Link to={`/users/${userId}/edit`}>
          <button className={styles.card__button}>
            <EditIcon title="Редактировать" />
          </button>
        </Link>
        <button className={styles.card__button} onClick={() => setModalActive(true)}>
          <DeleteIcon title="Удалить" />
        </button>
      </div>
      <Modal
        mode="confirm"
        modalState={modalActive}
        setModalState={setModalActive}
        handleSubmit={() => {
          dispatch(deleteUser(userId));
        }}
      >
        Вы действительно хотите удалить пользователя "{userName}"?
      </Modal>
    </div>
  );
};
