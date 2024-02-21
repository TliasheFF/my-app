import { FC } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/store";
import { Roles } from "../../constants/roles";

type Props = {
  userId: string;
};

export const UserPreviewCard: FC<Props> = ({ userId }) => {
  const user = useSelector((state: StateType) => state.user.users.find((user) => user.id === userId));
  const userRole = Roles.find((role) => role.id === user?.role);

  if (!user) {
    return null;
  }

  const { lastName, firstName, patronymic, blocked, email } = user;

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <p className={styles.card__name} title={`${lastName} ${firstName} ${patronymic}`}>
          &#128100;{lastName} {firstName.slice(0, 1)}. {patronymic && `${patronymic.slice(0, 1)}.`}
        </p>
        <span className={classNames(styles.card__state, styles[blocked ? "card__state_inactive" : "card__state_active"])}>
          {blocked ? "заблокирован" : "активен"}
        </span>
      </div>

      <div className={styles.card__info}>
        <div>{userRole && userRole.name}</div>
        <div>&#9993; {email}</div>
      </div>

      <hr className={styles.card__line} />

      <div className={styles.card__footer}>
        <button title="Редактировать" className={styles.card__button}>
          <svg className={styles.card__icon} viewBox="0 0 24 24">
            <use href="/src/assets/sprite.svg#edit"></use>
          </svg>
        </button>

        <button title="Удалить" className={styles.card__button} onClick={() => {}}>
          <svg className={styles.card__icon} viewBox="0 0 24 24">
            <use href="/src/assets/sprite.svg#delete"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
