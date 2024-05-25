import { User } from "@/shared/types";

export type NewUser = Omit<User, "id">;