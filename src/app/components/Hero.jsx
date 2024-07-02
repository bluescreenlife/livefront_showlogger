import Search from "./Search";

const Hero = ({
  handleSearch,
  artistInput,
  setArtistInput,
  dateInput,
  setDateInput,
}) => {
  return (
    <section
      className="hero relative flex-1"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div
        className="hero-image absolute inset-0 z-0 -mb-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/concert.jpg)" }}
        aria-hidden="true"
      ></div>
      <img src="/concert.jpg" alt="Crowd at a concert" className="sr-only" />
      <div className="gradient-overlay absolute inset-0 z-0 -mb-10 bg-gradient-to-b from-transparent to-neutral-900"></div>
      <div className="hero-contents relative z-10 pb-4 pt-20 text-center text-neutral-100">
        <h1
          id="hero-title"
          className="hero-title text-5xl font-extrabold drop-shadow-2xl md:text-6xl"
        >
          ShowLogger
        </h1>
        <div className="copy-text mx-4 grid grid-cols-1 p-8 drop-shadow-2xl md:grid-cols-2 md:space-x-1">
          <span className="col-span-1 md:text-right">
            Concerts make great memories.
          </span>
          <span className="col-span-1 md:text-left">
            Don&apos;t &#40;you&#41; forget about them.
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
