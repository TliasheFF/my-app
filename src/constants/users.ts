export type UsersType = UserType[];

export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    role: string;
    email: string;
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
      blocked: true,
    },
    {
      id: "1708096993535",
      firstName: "Полина",
      lastName: "Петрова",
      patronymic: "Павловна",
      role: "admin",
      email: "petrova.pp@example.com",
      blocked: true,
    },
    {
      id: "1708096993532",
      firstName: "Сергей",
      lastName: "Сергеев",
      patronymic: "",
      role: "editor",
      email: "sergeev.s@example.com",
      blocked: false,
    },
    {
      id: "1708096993533",
      firstName: "Константин",
      lastName: "Константинов",
      patronymic: "",
      role: "editor",
      email: "konstantinov.k@example.com",
      blocked: false,
    },    
  ];