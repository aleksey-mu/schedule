/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import {tableData} from "./tableData";
import getAllEvents from "../actions/httpRequests/getAllEvents";
import addNewEvent from "../actions/httpRequests/addNewEvent";
import deleteAllEvents from "../actions/httpRequests/deleteAllEvents";

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
