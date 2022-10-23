import FormStudent from "../../components/Form/FormStudent";
import { Modal } from "antd";
import { Student } from "./../../utils/constanst";

interface Props {
  isModalOpen: boolean;
  dataSource?: Student;
  handleCancel: () => void;
  handleEdit?: (data: Student) => void;
}

const StudentModal = (props: Props) => {
  const { isModalOpen, dataSource, handleCancel, handleEdit } = props;
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <FormStudent isEdit={true} data={dataSource} handleEdit={handleEdit} />
      </Modal>
    </>
  );
};

export default StudentModal;
