import FormStudent from "../../components/Form/FormStudent";
import { Modal } from "antd";
import { Student } from "./../../utils/constanst";

interface Props {
  id?: string;
  isModalOpen: boolean;
  dataSource?: Student;
  handleCancel: () => void;
}

const StudentModal = (props: Props) => {
  const { isModalOpen, dataSource, handleCancel, id } = props;
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <FormStudent id={id} isEdit={true} data={dataSource} />
      </Modal>
    </>
  );
};

export default StudentModal;
