import { FC } from "react";
import styles from "./users-page.module.scss";
import { useSelector } from "react-redux";
import { UserPreviewCard } from "../../widgets/user-preview-card/user-preview-card";
import { selectUsers } from "../../app/redux/selectors/selectors";

export const UsersPage: FC = () => {
  const users = useSelector(selectUsers);

  return users?.length ? (
    <div className={styles.cards}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} userId={user.id} />
      ))}
    </div>
  ) : (
    "Нет данных для отображения"
  );
};
