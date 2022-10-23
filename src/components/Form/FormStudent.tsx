import { Button, Form, Input, Radio } from "antd";

import { Student } from "./../../utils/constanst";

interface Props {
  handleAdd?: (data: Student) => void;
  handleEdit?: (data: Student) => void;
  isEdit?: boolean;
  data?: Student;
}

const FormStudent = (props: Props) => {
  const { handleAdd, handleEdit, isEdit = false, data } = props;
  const [form] = Form.useForm();
  console.log(data);
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: Student) => {
    if (isEdit) {
      handleEdit?.({
        key: "4",
        name: values.name,
        age: values.age,
        gender: values.gender,
      });
    } else {
      handleAdd?.({
        key: "4",
        name: values.name,
        age: values.age,
        gender: values.gender,
      });
    }
    onReset();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 21 }}
        initialValues={{
          name: data?.name,
          age: data?.age,
          gender: data?.gender,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="gender" label="Gender: ">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="others">Others</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormStudent;
