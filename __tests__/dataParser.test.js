import parseData from "@/app/utils/dataParser";

describe("dataParser", () => {
  it("returns a concertObject with all the necessary properties when passed JSON data replicating an API result", () => {
    const concertData = {
      type: "setlists",
      itemsPerPage: 20,
      page: 1,
      total: 1,
      setlist: [
        {
          id: "bd6bdd2",
          versionId: "5b320308",
          eventDate: "01-08-2008",
          lastUpdated: "2020-03-01T22:53:31.000+0000",
          artist: {
            mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711",
            name: "Radiohead",
            sortName: "Radiohead",
            disambiguation: "",
            url: "https://www.setlist.fm/setlists/radiohead-bd6bd12.html",
          },
          venue: {
            id: "53d6cfdd",
            name: "Grant Park",
            city: {
              id: "4887398",
              name: "Chicago",
              state: "Illinois",
              stateCode: "IL",
              coords: {
                lat: 41.850033,
                long: -87.6500523,
              },
              country: {
                code: "US",
                name: "United States",
              },
            },
            url: "https://www.setlist.fm/venue/grant-park-chicago-il-usa-53d6cfdd.html",
          },
          tour: {
            name: "In Rainbows",
          },
          sets: {
            set: [
              {
                song: [
                  {
                    name: "15 Step",
                  },
                  {
                    name: "Airbag",
                  },
                  {
                    name: "There There",
                  },
                  {
                    name: "All I Need",
                  },
                  {
                    name: "Nude",
                  },
                  {
                    name: "Weird Fishes/Arpeggi",
                  },
                  {
                    name: "The Gloaming",
                  },
                  {
                    name: "The National Anthem",
                  },
                  {
                    name: "Faust Arp",
                  },
                  {
                    name: "No Surprises",
                  },
                  {
                    name: "Jigsaw Falling Into Place",
                  },
                  {
                    name: "Reckoner",
                  },
                  {
                    name: "Lucky",
                  },
                  {
                    name: "The Bends",
                  },
                  {
                    name: "Everything in Its Right Place",
                    info: "Fireworks go off at Soldier Field and continue through the next few songs",
                  },
                  {
                    name: "Fake Plastic Trees",
                  },
                  {
                    name: "Bodysnatchers",
                  },
                ],
              },
              {
                encore: 1,
                song: [
                  {
                    name: "Videotape",
                  },
                  {
                    name: "Paranoid Android",
                  },
                  {
                    name: "Dollars and Cents",
                  },
                  {
                    name: "House of Cards",
                  },
                  {
                    name: "Optimistic",
                  },
                ],
              },
              {
                encore: 2,
                song: [
                  {
                    name: "2 + 2 = 5",
                  },
                  {
                    name: "Idioteque",
                  },
                ],
              },
            ],
          },
          url: "https://www.setlist.fm/setlist/radiohead/2008/grant-park-chicago-il-bd6bdd2.html",
        },
      ],
    };

    const concertObject = parseData(concertData);

    expect(concertObject.id).toBe("bd6bdd2");
    expect(concertObject.artist).toBe("Radiohead");
    expect(concertObject.date).toBe("August 1st, 2008");
    expect(concertObject.city).toBe("Chicago");
    expect(concertObject.venue).toBe("Grant Park");
    expect(concertObject.url).toBe(
      "https://www.setlist.fm/setlist/radiohead/2008/grant-park-chicago-il-bd6bdd2.html",
    );
    expect(concertObject.setlist).toStrictEqual([
      "15 Step",
      "Airbag",
      "There There",
      "All I Need",
      "Nude",
      "Weird Fishes/Arpeggi",
      "The Gloaming",
      "The National Anthem",
      "Faust Arp",
      "No Surprises",
      "Jigsaw Falling Into Place",
      "Reckoner",
      "Lucky",
      "The Bends",
      "Everything in Its Right Place",
      "Fake Plastic Trees",
      "Bodysnatchers",
    ]);
  });
});
