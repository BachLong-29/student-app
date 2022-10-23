import "./App.css";

import { Box } from "./ui/General/Box";
import FormStudent from "./components/Form/FormStudent";
import { Student } from "./utils/constanst";
import { Table } from "antd";
import { cloneDeep } from "lodash";
import { data } from "./data";
import { renderColumns } from "./utils/renderColumns";
import { useState } from "react";

function App() {
  const [dataSource, setDataSource] = useState<Student[]>(data);
  const handleDelete = (key: string) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const handleAdd = (newData: Student) => {
    setDataSource([...dataSource, newData]);
  };
  const handleEdit = (newData: Student) => {
    const cloneData = cloneDeep(dataSource);
    cloneData.splice(dataSource.indexOf(newData) - 1, 1, newData);
    setDataSource(cloneData);
  };
  const columns = renderColumns({
    handleDelete: handleDelete,
    handleEdit: handleEdit,
  });
  return (
    <Box style={{ margin: "12px" }}>
      <FormStudent handleAdd={handleAdd} />
      <Table bordered columns={columns} dataSource={dataSource} />
    </Box>
  );
}

export default App;
