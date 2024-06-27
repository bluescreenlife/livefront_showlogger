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
    if (e.target.value === "e.g. 01-08-2008") {
      setDateInput("");
      e.target.value = "";
    }
  };

  return (
    <section className="search-container flex-1 items-center">
      <div className="lbl-btn-container flex flex-col grow space-x-4 md:flex-row items-center py-2 md:mx-10">
        <div className="artist-group flex flex-col grow space-x-4 md:flex-row items-center">
          <label
            htmlFor="artist-input"
            className="block mb-2 text-sm font-medium"
          >
            <h3 className="text-xl text-nowrap">I saw:</h3>
          </label>
          <input
            type="text"
            defaultValue={"e.g. Radiohead"} // make greyed out later
            value={artistInput}
            onFocus={handleArtistFocus}
            onChange={(e) => setArtistInput(e.target.value)}
            id="artist-input"
            className="block grow w-full md:w-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
          ></input>
        </div>
        <div className="date-group flex flex-col grow space-x-4 md:flex-row items-center">
          <label
            htmlFor="artist-input"
            className="block lg:inline-block mb-2 lg:mb-0 lg:mr-2 text-sm font-medium"
          >
            <h3 className="text-xl">On:</h3>
          </label>
          <input
            type="text"
            defaultValue={"e.g. 01-08-2008"}
            value={dateInput}
            onFocus={handleDateFocus}
            onChange={(e) => setDateInput(e.target.value)}
            id="large-input-2"
            className="block grow w-full md:w-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
          ></input>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 lg:mt-0 rounded-md"
          onClick={handleSearch}
        >
          Log
        </button>
      </div>
    </section>
  );
};

export default Search;
