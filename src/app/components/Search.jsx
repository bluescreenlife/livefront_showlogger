"use client";

const Search = ({
  handleSearch,
  artistInput,
  setArtistInput,
  dateInput,
  setDateInput,
}) => {
  // clear field data from default on click
  const handleArtistFocus = (e) => {
    if (e.target.value === "e.g. Radiohead") {
      setArtistInput("");
      e.target.value = "";
    }
  };

  const handleDateFocus = (e) => {
    if (e.target.value === "e.g. 08/01/2008") {
      setDateInput("");
      e.target.value = "";
    }
  };

  return (
    <section className="search-container flex-1 items-center">
      <div className="lbl-btn-container flex flex-col md:flex-row grow space-y-4 md:space-y-0 md:space-x-4 items-center mt-2 mx-10">
        <div className="artist-group flex flex-row grow w-full space-x-2 items-center">
          <span className="absolute translate-x-8 md:translate-x-10 text-md md:text-lg text-gray-800 z-10">
            I saw:
          </span>
          <input
            type="text"
            value={artistInput}
            onFocus={handleArtistFocus}
            onChange={(e) => setArtistInput(e.target.value)}
            id="artist-input"
            className="block grow w-full text-center p-4 text-gray-900 border border-gray-300 rounded-full bg-gray-50 opacity-80 text-base"
          ></input>
        </div>
        <div className="date-group flex flex-row grow w-full space-x-2 items-center">
          <span className="absolute translate-x-8 md:translate-x-10 text-md md:text-lg text-gray-800 z-10">
            On:
          </span>
          <input
            type="text"
            value={dateInput}
            onFocus={handleDateFocus}
            onChange={(e) => setDateInput(e.target.value)}
            id="date-input"
            className="block grow w-full text-center md:w-auto p-4 text-gray-900 border border-gray-300 rounded-full bg-gray-50 opacity-80 text-base"
          ></input>
        </div>
        <button
          className="hover:-translate-y-1 duration-300 bg-gradient-to-r from-sky-500 to-indigo-500 text-white 
          text-center justify-center text-nowrap grow w-full md:w-fit font-bold py-4 p-6 rounded-full"
          onClick={handleSearch}
        >
          Add Show
        </button>
      </div>
    </section>
  );
};

export default Search;
