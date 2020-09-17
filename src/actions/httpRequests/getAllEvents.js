// get all existing events from DB
export default async function getAllEvents(baseURL, teamId) {
  const getAllEventsURL = `/team/${teamId}/events`;
  const response = await fetch(baseURL + getAllEventsURL);
  const data = await response.json();

  return data;
}
