/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-console */

const teamId = "group51";
const baseURL = "https://rs-react-schedule.firebaseapp.com/api";

// requests for events

// get all existing events from DB
export const getAllEvents = async (baseURL, teamId) => {
  const getAllEventsURL = `/team/${teamId}/events`;
  const response = await fetch(baseURL + getAllEventsURL);
  const data = await response.json();

  return data;
};

// add new event into DB
const addNewEvent = async (baseURL, teamId, body) => {
  const addNewEventURL = `/team/${teamId}/event`;
  const response = await fetch(baseURL + addNewEventURL, {
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();

  console.log(data);
};

// get existing event by ID from DB
const getEventByID = async (baseURL, teamId, eventId) => {
  const getEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + getEventByIDURL);
  const data = await response.json();

  return data;
};

// update existing event by ID from DB
const updateExistingEventByID = async (baseURL, teamId, body, eventId) => {
  const updateExistingEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + updateExistingEventByIDURL, {
    method: "PUT",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();

  console.log(data);
};

// delete existing event by ID from DB
export const deleteExistingEventByID = async (baseURL, teamId, eventId) => {
  console.log(eventId)
  const deleteExistingEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + deleteExistingEventByIDURL, {
    method: "DELETE",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
  });
  const data = await response.json();

  return data;
};

// delete all events from DB
const deleteAllEvents = async (baseURL, teamId, eventId) => {
  console.log(eventId)
  const deleteExistingEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + deleteExistingEventByIDURL, {
    method: "DELETE",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
  });
  const data = await response.json();

  return data;
};

//
// requests for organizers

// get all existing organizers from DB
const getAllOrganizers = async (baseURL, teamId) => {
  const getAllOrganizersURL = `/team/${teamId}/organizers`;
  const response = await fetch(baseURL + getAllOrganizersURL);
  const data = await response.json();

  return data;
};

// add new organizer into DB
const addNewOrganizer = async (baseURL, teamId, body) => {
  const addNewOrganizerURL = `/team/${teamId}/organizer`;
  const response = await fetch(baseURL + addNewOrganizerURL, {
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();

  console.log(data);
};

// get existing organizer by ID from DB
const getOrganizerByID = async (baseURL, teamId, organizerId) => {
  const getOrganizerByIDURL = `/team/${teamId}/organizer/${organizerId}`;
  const response = await fetch(baseURL + getOrganizerByIDURL);
  const data = await response.json();

  return data;
};

// update existing organizer by ID from DB
const updateExistingOrganizerByID = async (
  baseURL,
  teamId,
  body,
  organizerId
) => {
  const updateExistingOrganizerByIDURL = `/team/${teamId}/organizer/${organizerId}`;
  const response = await fetch(baseURL + updateExistingOrganizerByIDURL, {
    method: "PUT",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();

  console.log(data);
};

// delete existing organizer by ID from DB
const deleteExistingOrganizerByID = async (baseURL, teamId, organizerId) => {
  const deleteExistingOrganizerByIDURL = `/team/${teamId}/organizer/${organizerId}`;
  const response = await fetch(baseURL + deleteExistingOrganizerByIDURL, {
    method: "DELETE",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
  });
  const data = await response.json();

  return data;
};

// export functions

// const httpRequests = {
//   getAllEvents,
//   addNewEvent,
//   getEventByID,
//   updateExistingEventByID,
//   deleteExistingEventByID,
//   getAllOrganizers,
//   addNewOrganizer,
//   getOrganizerByID,
//   updateExistingOrganizerByID,
//   deleteExistingOrganizerByID,
// };

export default {
  getAllEvents,
  addNewEvent,
  getEventByID,
  updateExistingEventByID,
  deleteExistingEventByID,
  deleteAllEvents,
  getAllOrganizers,
  addNewOrganizer,
  getOrganizerByID,
  updateExistingOrganizerByID,
  deleteExistingOrganizerByID,
};
