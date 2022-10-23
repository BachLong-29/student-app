import DeleteButton from "../ui/Button/DeleteButton";
import EditButton from "./../ui/Button/EditButton";
import React from "react";
import { Student } from "./constanst";

type columns = {
  handleDelete: (id: string) => void;
  handleEdit: (data: Student) => void;
};
export const renderColumns = (props: columns) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      width: 250,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: 150,
    },
    {
      title: "",
      dataIndex: "edit",
      render: (_: any, record: { key: React.Key }) => (
        <EditButton id={record.key as string} handleEdit={props.handleEdit} />
      ),
      width: 20,
    },
    {
      title: "",
      dataIndex: "delete",
      render: (_: any, record: { key: React.Key }) => (
        <DeleteButton
          id={record.key as string}
          handleDelete={props.handleDelete}
        />
      ),
      width: 20,
    },
  ];
};
