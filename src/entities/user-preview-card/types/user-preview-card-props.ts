import { User } from "@/shared/types";

export type UserPreviewCardProps = {
    user: User;
    role: string | undefined;
    onDeleteUser: (userId: string) => void;
  };