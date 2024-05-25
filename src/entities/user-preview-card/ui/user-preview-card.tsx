import { FC, useState } from "react";
import styles from "./user-preview-card.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { getUserName } from "../lib/utils";
import dayjs from "dayjs";
import { DATE_FORMAT } from "@/shared/lib/constants";
import { UserPreviewCardProps } from "../types/user-preview-card-props";
import { roles } from "@/shared/mocks";

export const UserPreviewCard: FC<UserPreviewCardProps> = (props) => {
  const { user, onDeleteUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!user) {
    return null;
  }

  const { lastName, firstName, patronymic, blocked, email, validTo } = user;
  const { shortName, fullName } = getUserName({ lastName, firstName, patronymic });
  const validToDate = validTo ? dayjs(validTo).format(DATE_FORMAT) : "Не установлено";
  const currentStateStyle = styles[blocked ? "card__state_inactive" : "card__state_active"];
  const userRole = roles.find((role) => role.value === user.role);
  const userState = blocked ? "заблокирован" : "активен";

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    onDeleteUser(user.id);
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
        <span className={classNames(styles["card__state"], currentStateStyle)}>{userState}</span>
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
          <Link to={`/users/${user.id}`}>
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
