import { createEvent, createStore } from "effector";
import { users } from "../../shared/mocks/users";
import { User, Users } from "../../shared/types/users-type";

/* store */
export const $users = createStore<Users>(users)

/* events */
export const addUserEvent = createEvent<User>();
$users.on(addUserEvent, (state, user) => [...state, user]);

export const deleteUserEvent = createEvent<string>();
$users.on(deleteUserEvent, (state, id) => state.filter((user) => user.id !== id));

export const updateUserEvent = createEvent<User>();
$users.on(updateUserEvent, (state, newUser) =>
    state.map((user) => (user.id === newUser.id ? newUser : user))
);