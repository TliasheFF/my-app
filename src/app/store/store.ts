import { createStore } from "effector";
import { users } from "../../shared/mocks/users";
import { Users } from "../../shared/types/users-type";

export const $users = createStore<Users>(users)