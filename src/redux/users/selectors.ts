import { State } from "../store";

export const selectUsers = (state: State) => state.user.users;

export const selectUserById = (state: State, id: string) => selectUsers(state).find((user) => user.id === id);