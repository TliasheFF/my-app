import { User } from "@/shared/types";

export type UserPreviewCardProps = {
    user: User;
    onDeleteUser: (userId: string) => void;
  };