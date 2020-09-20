/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { Button } from "antd";

// import getAllEvents from "./actions/httpRequests/getAllEvents";
import addNewEvent from "./actions/httpRequests/addNewEvent";
import deleteAllEvents from "./actions/httpRequests/deleteAllEvents";
import getAllEvents from "./actions/httpRequests/getAllEvents";

import "./index.scss";
import "antd/dist/antd.css";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { tableData } from "./addDataIntoDB/tableData";

// начало

const teamId = "group51";
const baseURL = "https://rs-react-schedule.firebaseapp.com/api";

async function logEvents(baseURL, teamId) {
  const events = await getAllEvents(baseURL, teamId);
  console.log(events)
}

logEvents(baseURL, teamId);

// tableData.forEach((el) => addNewEvent(baseURL, teamId, el));

// deleteAllEvents(baseURL, teamId);

// конец

function App() {
  return (
    <div>
      <div>Hello!</div>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot />, mountNode);
