import { FC } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/store";
import { UserPreviewCard } from "../../user-preview-card/user-preview-card";

export const UsersPage: FC = () => {
  const users = useSelector((state: StateType) => state.user.users);

  return users?.length ? (
    <div className={styles.cardsContainer}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} userId={user.id} />
      ))}
    </div>
  ) : (
    "Нет данных для отображения"
  );
};
