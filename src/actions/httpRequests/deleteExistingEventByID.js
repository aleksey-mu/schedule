// delete existing event by ID from DB
export default async function deleteExistingEventByID(
  baseURL,
  teamId,
  eventId
) {
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
}
