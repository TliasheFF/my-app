import { ReactElement } from "react";
import { NotificationProps } from "./notification-props";

export type UseNotificationReturn = [
    (args: NotificationProps) => void,
    ReactElement,
  ];