import React from "react";
import Search from "./Search";

const Hero = ({ handleSearch, setArtistInput, setDateInput }) => {
  return (
    <section className="hero flex-1 bg-indigo-500">
      <div className="text-center py-20">
        <h1 className="text-6xl font-extrabold">ShowLogger</h1>
        <p className="text-blue-100 pt-8">
          Concerts make up some of your best memories. Keep track of them.
        </p>
        <div className="SearchBars mt-4">
          <Search
            handleSearch={handleSearch}
            setArtistInput={setArtistInput}
            setDateInput={setDateInput}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
