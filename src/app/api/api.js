import axios from "axios";
import moment from "moment";

/* makes API call to fetch concert data - routed through proxy at as setlist.fm
CORS policy interfered with requesting from client side
*/
async function getConcertData(artistName, eventDate) {
  const parsedDate = moment(eventDate, [
    "MM/DD/YYYY",
    "MM.DD.YYYY",
    "MM-DD-YYYY",
    "DD/MM/YYYY",
    "DD.MM.YYYY",
  ]).format("DD-MM-YYYY");
  console.log("parsedDate string:", parsedDate);

  try {
    const response = await axios.get("/api/proxy", {
      params: { artistName, eventDate: parsedDate },
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
