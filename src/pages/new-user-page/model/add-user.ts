import { $users } from "@/entities/store/store";
import { User } from "@/shared/types";
import { createEvent } from "effector";

export const addUserEvent = createEvent<User>();
$users.on(addUserEvent, (state, user) => [...state, user]);