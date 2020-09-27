import { Button, Modal } from "antd";
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import ChangeTaskCard from "../changeTaskCard/changeTaskCard";

export default function ShowMore({data}) {

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button type="button" onClick={() => setShowModal(!showModal)}>
        Подробнее
      </Button>
      <Modal
        visible={showModal}
        onOk={() => setShowModal(!showModal)}
        onCancel={() => setShowModal(!showModal)}
        width="fit-content"
        closable="false"
        style={{ top: 10, left: 0 }}
      >
        <ChangeTaskCard dataTask={data}/>
      </Modal>
    </div>
  );
}
