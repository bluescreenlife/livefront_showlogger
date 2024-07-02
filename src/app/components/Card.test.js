import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders card front with artist details", () => {
    const data = {
      id: 1,
      artist: "Radiohead",
      date: "08/01/2008",
      venue: "Grant Park",
      city: "Chicago",
      setlist: ["Airbag", "Reckoner"],
    };
    render(<Card data={data} handleDelete={jest.fn()} />);

    expect(
      screen.getByLabelText(`Concert details for Radiohead on 08/01/2008`),
    ).toBeInTheDocument();
  });

  it("flips the card when clicked", () => {
    const data = {
      id: 1,
      artist: "Radiohead",
      date: "08/01/2008",
      venue: "Grant Park",
      city: "Chicago",
      setlist: ["Airbag", "Reckoner"],
    };
    render(<Card data={data} handleDelete={jest.fn()} />);

    const cardFront = screen.getByLabelText(
      `Concert details for Radiohead on 08/01/2008`,
    );
    fireEvent.click(cardFront);

    expect(
      screen.getByLabelText(`Setlist for Radiohead on 08/01/2008`),
    ).toBeInTheDocument();
  });

  it("calls handleDelete when delete button is clicked", () => {
    const data = {
      id: 1,
      artist: "Radiohead",
      date: "08/01/2008",
      venue: "Venue",
      city: "City",
      setlist: ["Song1", "Song2"],
    };
    const handleDelete = jest.fn();
    render(<Card data={data} handleDelete={handleDelete} />);

    fireEvent.click(screen.getByLabelText("Delete concert"));

    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});
