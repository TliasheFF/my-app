import { createStore } from "effector";
import { users } from "@/shared/mocks";
import { Users } from "@/shared/types";

export const $users = createStore<Users>(users)