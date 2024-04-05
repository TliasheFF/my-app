import { FC } from "react";
import styles from "./new-user-page.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../shared/types/users-type";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { roles } from "../../shared/mocks/roles";
import { useParams } from "react-router-dom";
import { State } from "../../app/redux/store";
import { selectUserById } from "../../app/redux/slices/users-slice";
import { addUser, updateUser } from "../../app/redux/slices/users-slice";
import { MAIL_PATTERN, ERROR_MESSAGE, NEW_USER_DEFAULT_VALUES } from "../../shared/constants";
import { Button } from "../../shared/ui/components/button/button";
import { notification } from "antd";
import { NotificationType } from "../../shared/types/notification-type";

type NewUserType = Omit<User, "id">;

export const NewUserPage: FC = () => {
  const { userId } = useParams();
  const currentUser = useSelector((state: State) => selectUserById(state, userId ?? ""));
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: userId ? "Изменения успешно сохранены!" : "Пользователь успешно создан!",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<NewUserType>({
    mode: "onBlur",
    defaultValues: currentUser,
  });

  const formSubmit: SubmitHandler<NewUserType> = (data): void => {
    if (isDirty && userId) {
      dispatch(updateUser({ ...data, id: userId }));
      reset({
        ...data,
      });
    } else {
      dispatch(addUser({ ...data, id: uid() }));
      reset();
    }

    openNotificationWithIcon("info");
  };

  return (
    <>
      {contextHolder}
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
        <div className={styles.form__group}>
          <label htmlFor="lastName" className={styles.form__label}>
            * Фамилия
          </label>
          <input className={styles.form__field} {...register("lastName", { required: true })} />
          {errors?.lastName && <span className={styles.form__error}>{ERROR_MESSAGE}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="firstName" className={styles.form__label}>
            * Имя
          </label>
          <input className={styles.form__field} {...register("firstName", { required: true })} />
          {errors?.firstName && <span className={styles.form__error}>{ERROR_MESSAGE}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="patronymic" className={styles.form__label}>
            Отчество
          </label>
          <input className={styles.form__field} {...register("patronymic")} />
        </div>

        <div className={styles.form__group}>
          <label htmlFor="email" className={styles.form__label}>
            * Адрес электронной почты
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className={styles.form__field}
            {...register("email", { required: true, pattern: MAIL_PATTERN })}
          />
          {errors?.email && <span className={styles.form__error}>{ERROR_MESSAGE}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="login" className={styles.form__label}>
            * Логин
          </label>
          <input className={styles.form__field} {...register("login", { required: true })} />
          {errors?.login && <span className={styles.form__error}>{ERROR_MESSAGE}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="role" className={styles.form__label}>
            Роль
          </label>
          <select className={styles.form__field} {...register("role")}>
            {roles.map((role) => (
              <option key={role.id} value={role.id} className={styles.form__option}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div className={classNames(styles.form__group, styles.form__group_checkbox)}>
          <label htmlFor="blocked" className={styles.form__label}>
            Заблокировать пользователя:
          </label>
          <input type="checkbox" className={styles.form__field} {...register("blocked")} />
        </div>

        {/* TODO: поменять кнопки на antd */}

        <Button type="submit" disabled={!isDirty}>
          {userId ? "Сохранить" : "Создать"}
        </Button>
        {!userId && <Button onClick={() => reset(NEW_USER_DEFAULT_VALUES)}>Очистить форму</Button>}
      </form>
    </>
  );
};
