import React, { useRef } from "react";

const Search = ({
  handleSearch,
  artistInput,
  setArtistInput,
  dateInput,
  setDateInput,
}) => {
  const artistInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleDateKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      artistInputRef.current.focus(); // return focus to the artist box
    }
  };

  return (
    <section className="search-container flex-1 items-center">
      <div className="lbl-btn-container mx-10 mt-2 flex grow flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="artist-group flex w-full grow flex-row items-center space-x-2">
          <label
            htmlFor="artist-input"
            className="text-md absolute z-10 translate-x-8 text-gray-800 md:translate-x-10 md:text-lg"
          >
            I saw:
          </label>
          <input
            type="text"
            value={artistInput}
            placeholder="Radiohead"
            onChange={(e) => setArtistInput(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={artistInputRef}
            id="artist-input"
            className="block w-full grow rounded-full border border-gray-300 bg-gray-50 py-4 pl-24 text-left text-base text-gray-900 opacity-80"
            aria-label="Artist"
          ></input>
        </div>
        <div className="date-group flex w-full grow flex-row items-center space-x-2">
          <label
            htmlFor="date-input"
            className="text-md absolute z-10 translate-x-8 text-gray-800 md:translate-x-10 md:text-lg"
          >
            On:
          </label>
          <input
            type="text"
            value={dateInput}
            placeholder="08/01/2008"
            onChange={(e) => setDateInput(e.target.value)}
            onKeyDown={handleDateKeyDown}
            id="date-input"
            className="block w-full grow rounded-full border border-gray-300 bg-gray-50 py-4 pl-20 text-left text-base text-gray-900 opacity-80 md:w-auto"
            aria-label="Date"
          ></input>
        </div>
        <button
          className="w-full grow justify-center text-nowrap rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 p-6 py-4 text-center font-bold text-white duration-300 hover:-translate-y-1 md:w-fit"
          onClick={handleSearch}
          aria-label="Add Show"
        >
          Add Show
        </button>
      </div>
    </section>
  );
};

export default Search;
