interface UserNameType {
    shortName: string
    fullName: string
}

export const getUserName = (lastName: string, firstName: string, patronymic: string | undefined): UserNameType => {
    const shortName = `${lastName} ${firstName.slice(0, 1)}. ${patronymic && `${patronymic.slice(0, 1)}.`}`;
    const fullName = `${lastName} ${firstName} ${patronymic}`;
    
    return {
        shortName,
        fullName
    }
}