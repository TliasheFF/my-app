import { FC, useState } from "react";
import styles from "./new-user-page.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../shared/ui/components/button/button";
import { User } from "../../shared/types/users-type";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { roles } from "../../shared/mocks/roles";
import { useParams } from "react-router-dom";
import { Modal } from "../../shared/ui/components/modal/modal";
import { State } from "../../app/redux/store";
import { selectUserById } from "../../app/redux/selectors/selectors";
import { addUser, updateUser } from "../../app/redux/slices/users-slice";

type FormValuesType = Omit<User, "id">;

const newUserDefaultValues = {
  lastName: "",
  firstName: "",
  patronymic: "",
  role: "",
  email: "",
  login: "",
  blocked: false,
};

export const NewUserPage: FC = () => {
  const { userId } = useParams();
  const currentUser = useSelector((state: State) => selectUserById(state, userId ?? ""));
  const mailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
  const errorMessage = "Поле обязательно для заполнения";
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormValuesType>({
    mode: "onBlur",
    defaultValues: currentUser,
  });

  const showModal = () => {
    setModalActive(true);
    setTimeout(setModalActive, 1500, false);
  };

  const formSubmit: SubmitHandler<FormValuesType> = (data): void => {
    if (isDirty && userId) {
      dispatch(updateUser({ ...data, id: userId }));
      reset({
        ...data,
      });
    } else {
      dispatch(addUser({ ...data, id: uid() }));
      reset();
    }

    showModal();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
        <div className={styles.form__group}>
          <label htmlFor="lastName" className={styles.form__label}>
            * Фамилия
          </label>
          <input className={styles.form__field} {...register("lastName", { required: true })} />
          {errors?.lastName && <span className={styles.form__error}>{errorMessage}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="firstName" className={styles.form__label}>
            * Имя
          </label>
          <input className={styles.form__field} {...register("firstName", { required: true })} />
          {errors?.firstName && <span className={styles.form__error}>{errorMessage}</span>}
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
            {...register("email", { required: true, pattern: mailPattern })}
          />
          {errors?.email && <span className={styles.form__error}>{errorMessage}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="login" className={styles.form__label}>
            * Логин
          </label>
          <input className={styles.form__field} {...register("login", { required: true })} />
          {errors?.login && <span className={styles.form__error}>{errorMessage}</span>}
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

        <Button disabled={!isDirty}>{userId ? "Сохранить" : "Создать"}</Button>
        {!userId && (
          <Button type="button" onClick={() => reset(newUserDefaultValues)}>
            Очистить форму
          </Button>
        )}
      </form>
      <Modal modalState={modalActive} setModalState={setModalActive}>
        {userId ? "Изменения успешно сохранены!" : "Пользователь успешно создан!"}
      </Modal>
    </>
  );
};
