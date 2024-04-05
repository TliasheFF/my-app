import { FC } from "react";
import styles from "./users-page.module.scss";
import { useSelector } from "react-redux";
import { UserPreviewCard } from "../../widgets/user-preview-card/user-preview-card";
import { selectUsers } from "../../app/redux/slices/users-slice";

export const UsersPage: FC = () => {
  const users = useSelector(selectUsers);

  if (!Array.isArray(users) || users.length === 0) {
    return "Нет данных для отображения";
  }

  return (
    <div className={styles.cards}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} userId={user.id} />
      ))}
    </div>
  );
};
