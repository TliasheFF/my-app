import { FC } from "react";
import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../button/component";
import { UserType } from "../../../constants/users";
import classNames from "classnames";

type FormData = Omit<UserType, "id">;

export const NewUserPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const formSubmit: SubmitHandler<FormData> = (data): void => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <div className={styles.form__group}>
        <label htmlFor="lastName" className={styles.form__label}>
          * Фамилия
        </label>
        <input className={styles.form__field} {...register("lastName", { required: true })} />
        <div>{errors.lastName && <span className={styles.form__errorMessage}>поле обязательно для заполнения</span>}</div>
      </div>

      <div className={styles.form__group}>
        <label htmlFor="firstName" className={styles.form__label}>
          * Имя
        </label>
        <input className={styles.form__field} {...register("firstName", { required: true })} />
        <div>{errors.firstName && <span className={styles.form__errorMessage}>поле обязательно для заполнения</span>}</div>
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
        <div>{errors.email && <span className={styles.form__errorMessage}>поле обязательно для заполнения</span>}</div>
      </div>

      <div className={styles.form__group}>
        <label htmlFor="login" className={styles.form__label}>
          * Логин
        </label>
        <input className={styles.form__field} {...register("login", { required: true })} />
        <div>{errors.login && <span className={styles.form__errorMessage}>поле обязательно для заполнения</span>}</div>
      </div>

      <div className={styles.form__group}>
        <label htmlFor="role" className={styles.form__label}>
          Роль
        </label>
        <select className={styles.form__field} {...register("role")}>
          <option value=""></option>
          <option value="admin" className={styles.form__option}>
            Администратор
          </option>
          <option value="reader" className={styles.form__option}>
            Читатель
          </option>
          <option value="editor" className={styles.form__option}>
            Редактор
          </option>
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
