import React, { useState } from "react";

import { EditOutlined } from "@ant-design/icons";
import StudentModal from "../Modal/StudentModal";

const EditButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <EditOutlined onClick={showModal} style={{ cursor: "pointer" }} />
      <StudentModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  );
};

export default EditButton;
