import { FC } from "react";
import styles from "./new-user-page.module.scss";
import { SubmitHandler } from "react-hook-form";
import { User } from "../../shared/types/users-type";
import { uid } from "uid";
import { roles } from "../../shared/mocks/roles";
import { useParams } from "react-router-dom";
import { ERROR_MESSAGE, NEW_USER_DEFAULT_VALUES } from "../../shared/constants";
import { Button, Form, Input, Select, Space, Switch, notification } from "antd";
import { NotificationType } from "../../shared/types/notification-type";
import { $users, addUserEvent, updateUserEvent } from "../../app/store/store";
import { useUnit } from "effector-react";

type NewUserType = Omit<User, "id">;

export const NewUserPage: FC = () => {
  const { userId } = useParams();
  const currentUser = useUnit($users).find((user) => user.id === userId);
  const [api, contextHolder] = notification.useNotification();
  const addUser = useUnit(addUserEvent);
  const updateUser = useUnit(updateUserEvent);
  const formInitialValues: NewUserType = currentUser ?? NEW_USER_DEFAULT_VALUES;

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: userId ? "Изменения успешно сохранены!" : "Пользователь успешно создан!",
    });
  };

  const [form] = Form.useForm();

  const formSubmit: SubmitHandler<NewUserType> = (data): void => {
    if (userId) {
      updateUser({ ...data, id: userId });
    } else {
      addUser({ ...data, id: uid() });
    }

    openNotificationWithIcon("info");
  };

  return (
    <div className={styles["form"]}>
      {contextHolder}
      <Form layout="vertical" form={form} initialValues={formInitialValues} onFinish={formSubmit}>
        <Form.Item
          name="lastName"
          label="Фамилия"
          rules={[{ required: true, message: ERROR_MESSAGE }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="Имя"
          rules={[{ required: true, message: ERROR_MESSAGE }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="patronymic" label="Отчество">
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            { required: true, type: "email", message: "Некорректный адрес электронной почты!" },
          ]}
        >
          <Input placeholder="name@example.com" />
        </Form.Item>

        <Form.Item name="login" label="Логин" rules={[{ required: true, message: ERROR_MESSAGE }]}>
          <Input />
        </Form.Item>

        <Form.Item name="role" label="Роль">
          <Select options={roles} />
        </Form.Item>

        <Form.Item name="blocked" label="Заблокировать пользователя">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              {userId ? "Сохранить" : "Создать"}
            </Button>

            {!userId && <Button htmlType="reset">Очистить форму</Button>}
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
