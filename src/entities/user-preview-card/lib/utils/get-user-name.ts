import { UserName, UserNameProps } from "../../types";

export const getUserName = (props: UserNameProps): UserName => {
    const { lastName, firstName, patronymic } = props;

    return {
        shortName: `${lastName} ${firstName.slice(0, 1)}. ${patronymic && `${patronymic.slice(0, 1)}.`}`,
        fullName: `${lastName} ${firstName} ${patronymic}`,
    }
}