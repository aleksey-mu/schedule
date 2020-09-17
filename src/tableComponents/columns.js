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
import { tableData } from "./tableData";

const columns = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
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
        {descriptionUrl}
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
    dataIndex: "id",
    key: "id",
    render: (id) => {
        return (
          <button data-id={id} key={id} onClick={logNode} type="button">
            Подробнее
          </button>
        );
      },
  },  
  {
    title: "Обновить запись",
    dataIndex: "id",
    key: "id",
    render: (id) => {
      return (
        <button data-id={id} key={id} onClick={logNode} type="button">
          Обновить запись
        </button>
      );
    },
  },
];

const teamId = "group51";
const baseURL = "https://rs-react-schedule.firebaseapp.com/api";

async function getEventByID(baseURL, teamId, eventId) {
  const getEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + getEventByIDURL);
  const data = await response.json();

  return data;
}

async function logNode(e) {
  const id = e.target.getAttribute("data-id") - 1;
  console.log(tableData[id]);
  const response = await getEventByID(baseURL, teamId, id);
  console.log(response);
}

export default columns;
