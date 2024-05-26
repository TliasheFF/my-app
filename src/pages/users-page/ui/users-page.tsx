import { FC } from "react";
import styles from "./users-page.module.scss";
import { UserPreviewCard } from "@/entities/user-preview-card";
import { useUnit } from "effector-react";
import { $users, deleteUserEvent, roles } from "@/entities/users";

export const UsersPage: FC = () => {
  const [users, deleteUser] = useUnit([$users, deleteUserEvent]);

  if (!Array.isArray(users) || users.length === 0) {
    return "Нет данных для отображения";
  }

  return (
    <div className={styles["cards"]}>
      {users.map((user) => {
        const userRole = roles.find((role) => role.value === user.role);

        return (
          <UserPreviewCard
            key={user.id}
            user={user}
            role={userRole?.label}
            onDeleteUser={deleteUser}
          />
        );
      })}
    </div>
  );
};
