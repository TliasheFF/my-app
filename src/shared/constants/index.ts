import { User } from "../types/users-type";

export const ERROR_MESSAGE = "Поле обязательно для заполнения";

export const DATE_FORMAT = 'DD.MM.YYYY';

export const NEW_USER_DEFAULT_VALUES: Omit<User, "id" | "validTo"> = {
    lastName: "",
    firstName: "",
    patronymic: "",
    role: "",
    email: "",
    login: "",
    blocked: false,
  };