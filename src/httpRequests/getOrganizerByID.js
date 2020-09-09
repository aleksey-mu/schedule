// get existing organizer by ID from DB
export default async function getOrganizerByID(baseURL, teamId, organizerId) {
  const getOrganizerByIDURL = `/team/${teamId}/organizer/${organizerId}`;
  const response = await fetch(baseURL + getOrganizerByIDURL);
  const data = await response.json();

  return data;
}
