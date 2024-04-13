interface UserName {
    shortName: string
    fullName: string
}

export const getUserName = (lastName: string, firstName: string, patronymic: string | undefined): UserName => {
    return {
        shortName: `${lastName} ${firstName.slice(0, 1)}. ${patronymic && `${patronymic.slice(0, 1)}.`}`,
        fullName: `${lastName} ${firstName} ${patronymic}`,
    }
}