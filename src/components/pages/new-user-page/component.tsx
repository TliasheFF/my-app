import { FC } from "react";
import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../button/component";
import { UserType } from "../../../constants/users";

type FormData = Pick<UserType, "lastName">;

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

      <Button>Создать</Button>
    </form>
  );
};
