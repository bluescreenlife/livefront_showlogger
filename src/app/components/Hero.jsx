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
      <div className="hero-contents text-center text-neutral-100 pt-20 pb-2">
        <h1 className="hero-title text-6xl font-extrabold">ShowLogger</h1>
        <p className="p-8 mx-4">
          Concerts make great memories. Keep track of 'em.
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
