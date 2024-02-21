export type Roles = Role[]

export type Role = {
    id: string;
    name: string;
}

export const Roles: Roles = [
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