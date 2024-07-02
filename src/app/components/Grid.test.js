import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

describe("Grid", () => {
  it("renders no concerts message when cards are empty", () => {
    render(<Grid cards={[]} handleDelete={jest.fn()} />);

    expect(screen.getByText("No concerts logged yet.")).toBeInTheDocument();
  });

  it("renders concert cards when cards are present", () => {
    const mockCard = {
      id: "63fa8edf",
      artist: "Radiohead",
      date: "08/01/2008",
      city: "Chicago",
      venue: "Grant Park",
      setlist: [
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
      ],
    };

    render(<Grid cards={[mockCard]} handleDelete={jest.fn()} />);

    expect(screen.getByText("Radiohead")).toBeInTheDocument();
    expect(screen.getByText("08/01/2008")).toBeInTheDocument();
    expect(screen.getByText("Grant Park, Chicago")).toBeInTheDocument();
  });
});
