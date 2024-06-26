const parseData = (concertData) => {
  const concertDetail = concertData.setlist[0];

  console.log("Attempting to parse data: ", concertDetail);

  const concertObject = {
    added: new Date().toISOString(),
    artist: concertDetail.artist.name,
    date: concertDetail.eventDate,
    city: concertDetail.venue.city.name,
    venue: concertDetail.venue.name,
    url: concertDetail.url,
    setlist: concertDetail.sets.set[0]?.song.map((song) => song.name) ?? null,
  };

  console.log("Created concertObject: ", concertObject);
  return concertObject;
};

export default parseData;
