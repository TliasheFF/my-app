import { createEvent, createStore, sample } from "effector";
import { users } from "../mocks";
import { User, Users } from "@/shared/types";

export const $users = createStore<Users>(users);
export const addUserEvent = createEvent<User>();
export const updateUserEvent = createEvent<User>();
export const deleteUserEvent = createEvent<string>();

sample({
    clock: addUserEvent,
    source: $users,
    fn: (users, user) => [...users, user],
    target: $users
})

sample({
    clock: updateUserEvent,
    source: $users,
    fn: (users, updatedUser) =>
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    target: $users
})

sample({
    clock: deleteUserEvent,
    source: $users,
    fn: (users, id) => users.filter((user) => user.id !== id),
    target: $users
})