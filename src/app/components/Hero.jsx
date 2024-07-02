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
        className="hero-image absolute inset-0 -mb-10 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/concert.jpg)" }}
      ></div>
      <div className="gradient-overlay absolute inset-0 -mb-10 bg-gradient-to-b from-transparent to-neutral-900 z-0"></div>
      <div className="hero-contents text-center text-neutral-100 pt-20 pb-4 relative z-10">
        <h1 className="hero-title text-5xl md:text-6xl font-extrabold drop-shadow-2xl">
          ShowLogger
        </h1>
        <div className="copy-text grid grid-cols-1 md:grid-cols-2 md:space-x-1 p-8 mx-4 drop-shadow-2xl">
          <span className="col-span-1 md:text-right">
            Concerts make great memories.
          </span>
          <span className="col-span-1 md:text-left">
            Don&apos;t you forget about them.
          </span>
        </div>
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
