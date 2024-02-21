export type Roles = Role[]

export type Role = {
    id: string;
    name: string;
}

export const roles: Roles = [
    {
        id: 'admin',
        name: 'Администратор',
    },
    {
        id: 'reader',
        name: 'Читатель',
    },
    {
        id: 'editor',
        name: 'Редактор',
    },
]