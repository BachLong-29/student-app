import React, { useState } from "react";

import FormStudent from "../../components/Form/FormStudent";
import { Modal } from "antd";

interface Props {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const StudentModal = (props: Props) => {
  const { isModalOpen, handleCancel } = props;

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormStudent />
      </Modal>
    </>
  );
};

export default StudentModal;
