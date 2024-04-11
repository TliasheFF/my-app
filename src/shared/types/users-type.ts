import dayjs from "dayjs";

export type Users = User[];

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    role: string;
    email: string;
    login: string;
    validTo: dayjs.Dayjs;
    blocked: boolean;
}
