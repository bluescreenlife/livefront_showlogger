import moment from "moment";
import concertObject from "./concertObject";

const parseData = (concertData) => {
  const concertDetail = concertData.setlist[0];

  console.log("Attempting to parse data: ", concertDetail);

  // create new object from concertObject class
  const concert = new concertObject({
    id: concertDetail.id,
    artist: concertDetail.artist.name,
    date: moment(concertDetail.eventDate, "DD-MM-YYYY").format("MMMM Do, YYYY"),
    city: concertDetail.venue.city.name,
    venue: concertDetail.venue.name,
    url: concertDetail.url,
    setlist: concertDetail.sets.set[0]?.song.map((song) => song.name) ?? null,
  });

  console.log("Created concertObject: ", concert);
  return concert;
};

export default parseData;
