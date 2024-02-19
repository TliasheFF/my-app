export type UsersType = UserType[];

export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    role: string;
    email: string;
    login: string;
    blocked: boolean;
}

export const Users: UsersType = [
    {
      id: "1708096993534",
      firstName: "Иван",
      lastName: "Иванов",
      patronymic: "Иванович",
      role: "reader",
      email: "ivanov.ii@example.com",
      login: "ivanov.ii",
      blocked: true,
    },
    {
      id: "1708096993535",
      firstName: "Полина",
      lastName: "Петрова",
      patronymic: "Павловна",
      role: "admin",
      email: "petrova.pp@example.com",
      login: "petrova.pp",
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
      blocked: false,
    },
    {
      id: "1708096993533",
      firstName: "Константин",
      lastName: "Константинов",
      patronymic: "",
      role: "editor",
      email: "konstantinov.k@example.com",
      login: "konstantinov.k",
      blocked: false,
    },    
  ];