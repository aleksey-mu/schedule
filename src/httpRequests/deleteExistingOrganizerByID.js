// delete existing organizer by ID from DB
export default async function deleteExistingOrganizerByID(
  baseURL,
  teamId,
  organizerId
) {
  const deleteExistingOrganizerByIDURL = `/team/${teamId}/organizer/${organizerId}`;
  const response = await fetch(baseURL + deleteExistingOrganizerByIDURL);
  const data = await response.json();

  return data;
}
