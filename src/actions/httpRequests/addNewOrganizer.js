// add new organizer into DB
export default async function addNewOrganizer(baseURL, teamId, body) {
  const addNewOrganizerURL = `/team/${teamId}/organizer`;
  const response = await fetch(baseURL + addNewOrganizerURL, {
    method: "POST",
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
