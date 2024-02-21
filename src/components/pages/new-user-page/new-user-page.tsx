import { FC } from "react";
import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../button/button";
import { User } from "../../../constants/users";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/users/users-slice";
import { uid } from "uid";
import { roles } from "../../../constants/roles";

type FormData = Omit<User, "id">;

const errorMessage = <span className={styles.form__errorMessage}>поле обязательно для заполнения</span>;

export const NewUserPage: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const formSubmit: SubmitHandler<FormData> = (data): void => {
    dispatch(addUser({ ...data, id: uid() }));
    alert("Пользователь успешно создан!");
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <div className={styles.form__group}>
        <label htmlFor="lastName" className={styles.form__label}>
          * Фамилия
        </label>
        <input className={styles.form__field} {...register("lastName", { required: true })} />
        <div>{errors.lastName && errorMessage}</div>
      </div>

      <div className={styles.form__group}>
        <label htmlFor="firstName" className={styles.form__label}>
          * Имя
        </label>
        <input className={styles.form__field} {...register("firstName", { required: true })} />
        <div>{errors.firstName && errorMessage}</div>
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
          {...register("email", { required: true, pattern: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/ })}
        />
        <div>{errors.email && errorMessage}</div>
      </div>

      <div className={styles.form__group}>
        <label htmlFor="login" className={styles.form__label}>
          * Логин
        </label>
        <input className={styles.form__field} {...register("login", { required: true })} />
        <div>{errors.login && errorMessage}</div>
      </div>

      <div className={styles.form__group}>
        <label htmlFor="role" className={styles.form__label}>
          Роль
        </label>
        <select className={styles.form__field} {...register("role")}>
          <option value=""></option>
          {roles.map((role) => (
            <option value={role.id} className={styles.form__option}>
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

      <Button>Создать</Button>
    </form>
  );
};
