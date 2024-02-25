import { FC, useState } from "react";
import styles from "./user-preview-card.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";
import { roles } from "../../constants/roles";
import { selectUserById } from "../../redux/users/selectors";
import { EditIcon } from "../icons/edit-icon";
import { DeleteIcon } from "../icons/delete-icon";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/users/users-slice";
import { Modal } from "../modal/modal";

type Props = {
  userId: string;
};

export const UserPreviewCard: FC<Props> = (props) => {
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
          <EditIcon title="Редактировать" />
        </Link>
        <DeleteIcon title="Удалить" handleClick={() => setModalActive(true)} />
      </div>
      <Modal
        mode="confirm"
        text="Вы действительно хотите удалить выбранного пользователя?"
        modalState={modalActive}
        setModalState={setModalActive}
        handleSubmit={() => {
          dispatch(deleteUser(userId));
        }}
      />
    </div>
  );
};
