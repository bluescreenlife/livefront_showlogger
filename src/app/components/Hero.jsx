import React from "react";
import Search from "./Search";

const Hero = ({
  handleSearch,
  artistInput,
  setArtistInput,
  dateInput,
  setDateInput,
}) => {
  return (
    <section className="hero flex-1">
      <div className="hero-contents text-center pt-20 pb-10">
        <h1 className="hero-title text-6xl font-extrabold">ShowLogger</h1>
        <p className="text-blue-100 pt-8 pb-4">
          Concerts make up some of your best memories. Keep track of them.
        </p>
        <Search
          handleSearch={handleSearch}
          artistInput={artistInput}
          setArtistInput={setArtistInput}
          dateInput={dateInput}
          setDateInput={setDateInput}
        />
      </div>
    </section>
  );
};

export default Hero;
