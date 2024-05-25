import { notification } from "antd";
import { NotificationProps, NotificationType, UseNotificationReturn } from "../types";

export const useNotification = (): UseNotificationReturn => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (props: NotificationProps): void => {
    const { description, type = NotificationType.Info } = props;

    api[type]({
      message: description,
    });
  };

  return [openNotification, contextHolder];
};
