import dayjs from "dayjs";
import { Users } from "../types/users-type";

export const users: Users = [
    {
      id: "1708096993534",
      firstName: "Иван",
      lastName: "Иванов",
      patronymic: "Иванович",
      role: "admin",
      email: "ivanov.ii@example.com",
      login: "ivanov.ii",
      validTo: dayjs('11.01.2022'),
      blocked: true,
    },
    {
      id: "1708096993535",
      firstName: "Полина",
      lastName: "Петрова",
      patronymic: "Павловна",
      role: "reader",
      email: "petrova.pp@example.com",
      login: "petrova.pp",
      validTo: dayjs('07.17.2022'),
      blocked: true,
    },
    {
      id: "1708096993532",
      firstName: "Сергей",
      lastName: "Сергеев",
      patronymic: "",
      role: "editor",
      email: "sergeev.s@example.com",
      login: "sergeev.s",
      validTo: dayjs('06.04.2026'),
      blocked: false,
    },
    {
      id: "1708096993533",
      firstName: "Константин",
      lastName: "Константинов",
      patronymic: "",
      role: "reader",
      email: "konstantinov.k@example.com",
      login: "konstantinov.k",
      validTo: dayjs('06.16.2024'),
      blocked: false,
    },    
  ];