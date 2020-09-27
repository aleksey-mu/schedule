// update existing event by ID from DB
export default async function updateExistingEventByID(
  baseURL,
  teamId,
  body,
  eventId
) {
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
}
