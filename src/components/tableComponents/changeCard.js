import { Button } from "antd";
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { tableData } from "./tableData";
import ChangeTaskCard from "../changeTaskCard/changeTaskCard";

export default function ChangeCard(props) {

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
      {showModal && <ChangeTaskCard toggleVisibility={toggleVisibility} />}
    </div>
  );
}