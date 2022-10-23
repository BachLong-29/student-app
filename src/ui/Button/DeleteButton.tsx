import { DeleteOutlined } from "@ant-design/icons";

interface Props {
  handleDelete: (id: string) => void;
  id: string;
}
const DeleteButton = (props: Props) => {
  const { handleDelete, id } = props;
  return (
    <>
      <DeleteOutlined
        onClick={() => handleDelete(id)}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default DeleteButton;
