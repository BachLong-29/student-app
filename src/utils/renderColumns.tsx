import DeleteButton from "../ui/Button/DeleteButton";
import EditButton from "./../ui/Button/EditButton";
import React from "react";

export const renderColumns = () => {
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
      title: "Address",
      dataIndex: "address",
      width: 150,
    },
    {
      title: "",
      dataIndex: "edit",
      render: () => <EditButton />,
      width: 20,
    },
    {
      title: "",
      dataIndex: "delete",
      render: () => <DeleteButton />,
      width: 20,
    },
  ];
};
