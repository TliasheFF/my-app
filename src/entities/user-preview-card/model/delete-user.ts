import { $users } from "@/app/store/store";
import { createEvent } from "effector";

export const deleteUserEvent = createEvent<string>();
$users.on(deleteUserEvent, (state, id) => state.filter((user) => user.id !== id));