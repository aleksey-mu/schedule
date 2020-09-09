// get existing event by ID from DB
export default async function getEventByID(baseURL, teamId, eventId) {
  const getEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + getEventByIDURL);
  const data = await response.json();

  return data;
}
