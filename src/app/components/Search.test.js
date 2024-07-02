import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search", () => {
  it("renders input fields and button", () => {
    render(
      <Search
        handleSearch={jest.fn()}
        artistInput=""
        setArtistInput={jest.fn()}
        dateInput=""
        setDateInput={jest.fn()}
      />
    );

    expect(screen.getByPlaceholderText("Radiohead")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("08/01/2008")).toBeInTheDocument();
    expect(screen.getByText("Add Show")).toBeInTheDocument();
  });

  it("calls setArtistInput and setDateInput on input change", () => {
    const setArtistInput = jest.fn();
    const setDateInput = jest.fn();
    render(
      <Search
        handleSearch={jest.fn()}
        artistInput=""
        setArtistInput={setArtistInput}
        dateInput=""
        setDateInput={setDateInput}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Radiohead"), {
      target: { value: "Coldplay" },
    });
    fireEvent.change(screen.getByPlaceholderText("08/01/2008"), {
      target: { value: "06/29/2024" },
    });

    expect(setArtistInput).toHaveBeenCalledWith("Coldplay");
    expect(setDateInput).toHaveBeenCalledWith("06/29/2024");
  });
});
