import { State } from "../store";

export const selectorUsers = (state: State) => state.user.users;

export const selectorUserById = (state: State, id: string) => selectorUsers(state).find((user) => user.id === id);