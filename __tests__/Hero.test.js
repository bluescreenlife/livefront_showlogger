import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "@/app/components/Hero";

describe("Hero", () => {
  it("renders the title and search component", () => {
    render(
      <Hero
        handleSearch={jest.fn()}
        artistInput=""
        setArtistInput={jest.fn()}
        dateInput=""
        setDateInput={jest.fn()}
      />,
    );

    expect(screen.getByText("ShowLogger")).toBeInTheDocument();
    expect(
      screen.getByText("Concerts make great memories."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Don't (you) forget about them."),
    ).toBeInTheDocument();
  });

  it("calls handleSearch when the button is clicked", () => {
    const handleSearch = jest.fn();
    render(
      <Hero
        handleSearch={handleSearch}
        artistInput=""
        setArtistInput={jest.fn()}
        dateInput=""
        setDateInput={jest.fn()}
      />,
    );

    fireEvent.click(screen.getByText("Add Show"));

    expect(handleSearch).toHaveBeenCalled();
  });
});
