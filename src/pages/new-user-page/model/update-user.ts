import { $users } from "@/entities/store/store";
import { User } from "@/shared/types";
import { createEvent } from "effector";

export const updateUserEvent = createEvent<User>();
$users.on(updateUserEvent, (state, updatedUser) =>
    state.map((user) => (user.id === updatedUser.id ? updatedUser : user))
);