/* eslint-disable import/named */
// import { getAllEvents } from "./httpRequests";
import getAllEvents from './getAllEvents'
import deleteExistingEventByID from './deleteExistingEventByID'

// delete all events from DB
export default async function deleteAllEvents(baseURL, teamId) {
  const events = await getAllEvents(baseURL, teamId);
  console.log(events)
  events.data.forEach((element) => {
    deleteExistingEventByID(baseURL, teamId, element.id);
  });
  // const database = await getAllEvents(baseURL, teamId);
  // console.log(database);
}
