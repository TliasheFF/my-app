import { FC } from "react";
import styles from "./users-page.module.scss";
import { UserPreviewCard } from "@/entities/user-preview-card";
import { useUnit } from "effector-react";
import { $users } from "@/app/store/store";

export const UsersPage: FC = () => {
  const users = useUnit($users);

  if (!Array.isArray(users) || users.length === 0) {
    return "Нет данных для отображения";
  }

  return (
    <div className={styles["cards"]}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} userId={user.id} />
      ))}
    </div>
  );
};
