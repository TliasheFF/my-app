import { FC } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { UserPreviewCard } from "../../user-preview-card/user-preview-card";
import { selectorUsers } from "../../../redux/users/selectors";

export const UsersPage: FC = () => {
  const users = useSelector(selectorUsers);

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
