import { Button } from "antd";
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import TaskCard from "../card-components/task-card/TaskCard";
import { tableData } from "./tableData";

export default function ShowMore(props) {

    const {id} = props;
    const dataRow = tableData[id - 1];


  const [showModal, setShowModal] = useState(false)

  function toggleVisibility(){
      
    setShowModal((prev) => !prev);
    console.log(showModal);
    console.log(id);
  }

  return (
    <div>
      <Button
        data-row={dataRow}
        data-id={id}
        key={id}
        onClick={toggleVisibility}
        type="button"
      >
        Подробнее
      </Button>
      {showModal && <TaskCard toggleVisibility={toggleVisibility} />}
    </div>
  );
}
