import { FC } from "react";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../button/component";

export const NewUserPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
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
