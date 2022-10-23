import "./App.css";
import "./App.css";

import { Box } from "./ui/General/Box";
import FormStudent from "./components/Form/FormStudent";
import React from "react";
import { Table } from "antd";
import { data } from "./data";
import { renderColumns } from "./utils/renderColumns";

function App() {
  const columns = renderColumns();
  return (
    <Box style={{ margin: "12px" }}>
      <FormStudent />
      <Table bordered columns={columns} dataSource={data} />
    </Box>
  );
}

export default App;
