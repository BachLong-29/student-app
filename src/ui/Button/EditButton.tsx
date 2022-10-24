import { EditOutlined } from "@ant-design/icons";
import { Student } from "./../../utils/constanst";
import StudentModal from "../Modal/StudentModal";
import { data } from "../../data";
import { useState } from "react";

interface Props {
  id: string;
}
const EditButton = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = () => {
    return data.find((item) => item.key === props.id);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <EditOutlined onClick={showModal} style={{ cursor: "pointer" }} />
      <StudentModal
        id={props.id}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        dataSource={getData()}
      />
    </>
  );
};

export default EditButton;
