import { FC } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/store";
import { UserPreviewCard } from "../../user-preview-card/component";

export const UsersPage: FC = () => {
  const users = useSelector((state: StateType) => state.user.users);

  return users?.length ? (
    <div className={styles.cardsContainer}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} user={user} />
      ))}
    </div>
  ) : (
    "Нет данных для отображения"
  );
};
