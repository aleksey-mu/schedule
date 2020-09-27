// add new event into DB
export default async function addNewEvent(baseURL, teamId, body) {
  const addNewEventURL = `/team/${teamId}/event`;
  const response = await fetch(baseURL + addNewEventURL, {
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
