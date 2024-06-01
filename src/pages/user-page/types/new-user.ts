import dayjs from "dayjs";

export type NewUser = {
    firstName: string;
    lastName: string;
    patronymic: string;
    role: string | null;
    email: string;
    login: string;
    validTo: dayjs.Dayjs;
    blocked: boolean;
}