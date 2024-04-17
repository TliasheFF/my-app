import { FC, useState } from "react";
import styles from "./user-preview-card.module.scss";
import classNames from "classnames";
import { roles } from "@/shared/mocks";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { getUserName } from "../lib/util";
import { useUnit } from "effector-react";
import { $users } from "@/entities/store/store";
import dayjs from "dayjs";
import { DATE_FORMAT } from "@/shared/constants";
import { deleteUserEvent } from "../model";

type UserPreviewCardPropsTypes = {
  userId: string;
};

export const UserPreviewCard: FC<UserPreviewCardPropsTypes> = (props) => {
  const { userId } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUnit($users).find((user) => user.id === userId);
  const deleteUser = useUnit(deleteUserEvent);

  if (!user) {
    return null;
  }

  const { lastName, firstName, patronymic, blocked, email, validTo } = user;
  const validToDate = dayjs(validTo).format(DATE_FORMAT);
  const { shortName, fullName } = getUserName(lastName, firstName, patronymic);
  const userRole = roles.find((role) => role.value === user.role);
  const currentStateStyle = styles[blocked ? "card__state_inactive" : "card__state_active"];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    deleteUser(userId);
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <p className={styles["card__name"]} title={fullName}>
          {shortName}
        </p>
        <span className={classNames(styles["card__state"], currentStateStyle)}>
          {blocked ? "заблокирован" : "активен"}
        </span>
      </div>

      <div className={styles["card__info"]}>
        <div>
          <div className={styles["card__icon"]}>
            <UserOutlined />
          </div>
          {userRole ? userRole.label : "Роль не назначена"}
        </div>
        <div className={styles["card__mail"]}>
          <div className={styles["card__icon"]}>
            <MailOutlined />
          </div>
          {email}
        </div>
        <div>
          <div className={styles["card__icon"]}>
            <CalendarOutlined />
          </div>
          Действителен до: {validToDate}
        </div>
      </div>

      <hr className={styles["card__line"]} />

      <div className={styles["card__footer"]}>
        <Button>
          <Link to={`/users/${userId}`}>
            <EditOutlined className={styles["card__button-icon"]} title="Редактировать" />
          </Link>
        </Button>
        <Button onClick={showModal}>
          <DeleteOutlined className={styles["card__button-icon"]} title="Удалить" />
        </Button>
      </div>

      <Modal
        className={styles["card__modal"]}
        cancelText="Отмена"
        okText="Удалить"
        open={isModalOpen}
        onOk={handleModalConfirm}
        onCancel={handleModalCancel}
        width={500}
      >
        Вы действительно хотите удалить пользователя "{shortName}"?
      </Modal>
    </div>
  );
};
