/* eslint-disable no-use-before-define */
/* eslint-disable no-redeclare */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import React from "react";

import ShowMore from "./showMore";

function ReduceText({ text, type }) {
  let length = 15;
  if (type === "long") {
    length = 40;
  }
  return <span>{text.length > length ? `${text.slice(0,length)}...` : text}</span>;
}

const columns = [
  {
    title: "№",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => {
        return (
          <span>{type}</span>
        );
      },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (description) => (
      <ReduceText text={description} type="long"/>
    )
  },
  {
    title: "Link",
    dataIndex: "descriptionUrl",
    key: "descriptionUrl",
    render: (descriptionUrl) => (
      <a
        onClick={(e) => console.log(e.target.href)}
        target="blank"
        href={descriptionUrl}
      >
        <ReduceText text={descriptionUrl}/>
      </a>
    ),
  },
  {
    title: "Time to complete",
    dataIndex: "timeToComplete",
    key: "timeToComplete",
  },
  {
    title: "Comment",
    dataIndex: "comment",
    key: "comment",
    render: (comment) => (
      <ReduceText text={comment} type="long"/>
    )
  },
  {
    title: "TimeZone",
    dataIndex: "timeZone",
    key: "timeZone",
  },
  {
    title: "Place",
    dataIndex: "place",
    key: "place",
  },
  {
    title: "Подробнее",
    dataIndex: "data",
    key: "data",
    render: (data) => {

        return (
          <ShowMore data = {data} />
        );
      },
  },  
];

export default columns;
