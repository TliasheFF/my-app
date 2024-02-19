export type RolesType = RoleType[]

export type RoleType = {
    id: string;
    name: string;
}

export const Roles: RolesType = [
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