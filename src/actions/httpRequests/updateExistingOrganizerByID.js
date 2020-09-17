// update existing organizer by ID from DB
export default async function updateExistingOrganizerByID(
  baseURL,
  teamId,
  body,
  organizerId
) {
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
}
