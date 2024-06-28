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
    <section className="hero flex-1 relative">
      <div
        className="hero-image absolute inset-0 -mb-12 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/concert.jpg)" }}
      ></div>
      <div className="gradient-overlay absolute inset-0 -mb-12 bg-gradient-to-b from-transparent to-black z-0"></div>
      <div className="hero-contents text-center text-neutral-100 pt-20 pb-4 relative z-10">
        <h1 className="hero-title text-6xl font-extrabold drop-shadow-2xl">
          ShowLogger
        </h1>
        <p className="p-8 mx-4 drop-shadow-2xl">
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
