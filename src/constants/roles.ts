export type Roles = Role[]

export type Role = {
    id: string;
    name: string;
}

export const roles: Roles = [
    {
        id: '111',
        name: '',
    },
    {
        id: '112',
        name: 'Администратор',
    },
    {
        id: '113',
        name: 'Читатель',
    },
    {
        id: '114',
        name: 'Редактор',
    },
]