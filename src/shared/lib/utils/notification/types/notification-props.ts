import { NotificationType } from "./notification-types";

export interface NotificationProps {
    description: string;
    type?: NotificationType;
  }