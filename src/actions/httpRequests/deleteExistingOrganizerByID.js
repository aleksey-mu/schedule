// delete existing organizer by ID from DB
export default async function deleteExistingOrganizerByID(
  baseURL,
  teamId,
  organizerId
) {
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
}
