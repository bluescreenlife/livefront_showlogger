import axios from "axios";

/* makes API call to fetch concert data - routed through proxy at as setlist.fm
CORS policy interfered with requesting from client side
*/
async function getConcertData(artistName, eventDate) {
  try {
    const response = await axios.get("/api/proxy", {
      params: { artistName, eventDate },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching concert data: ${error}`);
    alert("Show lookup failed. Please check input and try again.");
    return null;
  }
}

export default getConcertData;
