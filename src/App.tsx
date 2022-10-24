import "./App.css";

import { Box } from "./ui/General/Box";
import FormStudent from "./components/Form/FormStudent";
import { Student } from "./utils/constanst";
import { Table } from "antd";
import { cloneDeep } from "lodash";
import { data } from "./data";
import { renderColumns } from "./utils/renderColumns";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [dataSource, setDataSource] = useState<Student[]>(data);
  const studentRedux = useSelector((state: any) => state.student);

  const handleEdit = (newData: Student) => {
    const cloneData = cloneDeep(dataSource);
    cloneData.splice(dataSource.indexOf(newData) - 1, 1, newData);
    setDataSource(cloneData);
  };

  const columns = renderColumns({
    handleEdit: handleEdit,
  });

  return (
    <Box style={{ margin: "12px" }}>
      <FormStudent />
      <Table bordered columns={columns} dataSource={studentRedux} />
    </Box>
  );
}

export default App;
