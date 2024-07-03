import { render, screen } from "@testing-library/react";
import Grid from "@/app/components/Grid";

describe("Grid", () => {
  it("renders cards if present", () => {
    const cards = [
      {
        id: 1,
        artist: "Radiohead",
        date: "08/01/2008",
        venue: "Grant Park",
        city: "Chicago",
        setlist: ["Airbag", "Reckoner"],
      },
    ];
    render(
      <Grid
        cards={cards}
        artistInput=""
        setArtistInput={jest.fn()}
        dateInput=""
        setDateInput={jest.fn()}
        handleSearch={jest.fn()}
        handleDelete={jest.fn()}
      />,
    );

    expect(
      screen.getByLabelText(/Concert details for Radiohead on 08\/01\/2008/),
    ).toBeInTheDocument();
  });

  it("renders default text if no cards are present", () => {
    render(
      <Grid
        cards={[]}
        artistInput=""
        setArtistInput={jest.fn()}
        dateInput=""
        setDateInput={jest.fn()}
        handleSearch={jest.fn()}
        handleDelete={jest.fn()}
      />,
    );

    expect(screen.getByText("No concerts logged yet.")).toBeInTheDocument();
    expect(screen.getByText("load 10 examples.")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Load 10 example concerts"),
    ).toBeInTheDocument();
  });
});
