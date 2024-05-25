import { FC } from "react";
import styles from "./users-page.module.scss";
import { UserPreviewCard } from "@/entities/user-preview-card";
import { useUnit } from "effector-react";
import { $users, deleteUserEvent } from "@/entities/users";

export const UsersPage: FC = () => {
  const [users, deleteUser] = useUnit([$users, deleteUserEvent]);

  if (!Array.isArray(users) || users.length === 0) {
    return "Нет данных для отображения";
  }

  return (
    <div className={styles["cards"]}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} user={user} onDeleteUser={deleteUser} />
      ))}
    </div>
  );
};
