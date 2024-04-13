import { FC, useState } from "react";
import styles from "./new-user-page.module.scss";
import { User } from "@/shared/types";
import { uid } from "uid";
import { roles } from "@/shared/mocks";
import { useParams } from "react-router-dom";
import { DATE_FORMAT } from "@/shared/constants";
import { Button, DatePicker, Form, Input, Select, Space, Switch, notification } from "antd";
import { NotificationType } from "@/shared/types";
import { $users } from "@/app/store/store";
import { useUnit } from "effector-react";
import { NEW_USER_DEFAULT_VALUES, ERROR_MESSAGE } from "../lib/constants";
import { addUserEvent, updateUserEvent } from "../model";

type NewUser = Omit<User, "id">;

export const NewUserPage: FC = () => {
  const { userId } = useParams();
  const currentUser = useUnit($users).find((user) => user.id === userId);
  const [api, contextHolder] = notification.useNotification();
  const addUser = useUnit(addUserEvent);
  const updateUser = useUnit(updateUserEvent);
  const [form] = Form.useForm();
  const formInitialValues = currentUser ?? NEW_USER_DEFAULT_VALUES;
  const [isFormChanged, setIsFormChanged] = useState(false);

  const openNotification = (type: NotificationType) => {
    api[type]({
      message: userId ? "Изменения успешно сохранены!" : "Пользователь успешно создан!",
    });
  };

  const formSubmit = (data: NewUser): void => {
    if (userId) {
      updateUser({ ...data, id: userId });
    } else {
      addUser({ ...data, id: uid() });
    }

    setIsFormChanged(false);
    openNotification("info");
  };

  return (
    <div className={styles["form"]}>
      {contextHolder}
      <Form
        layout="vertical"
        form={form}
        initialValues={formInitialValues}
        onFinish={formSubmit}
        onValuesChange={() => setIsFormChanged(true)}
      >
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
          <Select options={roles} allowClear />
        </Form.Item>

        <Space className={styles["form__valid-and-state-container"]}>
          <Form.Item name="validTo" label="Действителен до">
            <DatePicker placeholder="Выберите дату" format={DATE_FORMAT} />
          </Form.Item>

          <Form.Item name="blocked" label="Заблокировать">
            <Switch />
          </Form.Item>
        </Space>

        <Form.Item>
          <Space className={styles["form__buttons-container"]}>
            <Button type="primary" htmlType="submit" disabled={!isFormChanged}>
              {userId ? "Сохранить" : "Создать"}
            </Button>

            {!userId && (
              <Button type="primary" htmlType="reset">
                Очистить форму
              </Button>
            )}
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};