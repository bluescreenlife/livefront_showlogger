class concertObject {
  constructor({
    id = "",
    artist = "",
    date = "",
    city = "",
    venue = "",
    url = "",
    setlist = [],
  }) {
    this.id = id;
    this.added = new Date().toISOString();
    this.artist = artist;
    this.date = date;
    this.city = city;
    this.venue = venue;
    this.url = url;
    this.setlist = setlist;
  }
}

export default concertObject;
