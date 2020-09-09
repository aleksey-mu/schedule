// delete existing event by ID from DB
export default async function deleteExistingEventByID(
  baseURL,
  teamId,
  eventId
) {
  const deleteExistingEventByIDURL = `/team/${teamId}/event/${eventId}`;
  const response = await fetch(baseURL + deleteExistingEventByIDURL);
  const data = await response.json();

  return data;
}
