import { User } from "./user";

export type UserPreviewCardProps = {
    user: User;
    role: string | undefined;
    onDeleteUser: (userId: string) => void;
  };