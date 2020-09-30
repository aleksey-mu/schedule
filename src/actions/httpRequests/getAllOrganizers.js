// get all existing organizers from DB
export default async function getAllOrganizers(baseURL, teamId) {
  const getAllOrganizersURL = `/team/${teamId}/organizers`;
  const response = await fetch(baseURL + getAllOrganizersURL);
  const data = await response.json();

  return data;
}
