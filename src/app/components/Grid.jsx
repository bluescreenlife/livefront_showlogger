import Card from "./Card";
import { useState, useEffect } from "react";

const Grid = ({
  cards,
  artistInput,
  setArtistInput,
  dateInput,
  setDateInput,
  handleSearch,
  handleDelete,
}) => {
  // hooks for monitoring trigger of sampleConcerts load-in
  const [loadingSamples, setLoadingSamples] = useState(false);
  const [sampleIndex, setSampleIndex] = useState(0);

  const sampleConcerts = [
    ["Radiohead", "08/01/2008"],
    ["LCD Soundsystem", "05/22/2024"],
    ["The Cure", "06/08/2023"],
    ["David Byrne", "05/18/2018"],
    ["Modest Mouse", "06/20/2024"],
    ["Bon Iver", "07-18-2015"],
    ["Arcade Fire", "03/08/2014"],
    ["Queens of the Stone Age", "10/14/2017"],
    ["Third Eye Blind", "06-28-2015"],
    ["American Football", "10-29-2016"],
  ];

  // triggered by loadSampleData function - update artist and date hooks
  useEffect(() => {
    if (loadingSamples && sampleIndex < sampleConcerts.length) {
      const [artist, date] = sampleConcerts[sampleIndex];
      setArtistInput(artist);
      setDateInput(date);
    }
  }, [loadingSamples, sampleIndex]);

  // triggered by artist and date change - ensure values are loaded and then trigger search
  // after search, increase index, triggering the next sampleConcert search
  useEffect(() => {
    if (loadingSamples && sampleIndex < sampleConcerts.length) {
      const [artist, date] = sampleConcerts[sampleIndex];
      if (artistInput === artist && dateInput === date) {
        handleSearch().then(() => {
          setTimeout(() => {
            setSampleIndex((prevIndex) => prevIndex + 1);
          }, 1500); // 1.5-second delay between each API call to prevent rate limit error
        });
      }
    }
  }, [artistInput, dateInput]);

  const loadSampleData = () => {
    setLoadingSamples(true);
    setSampleIndex(0);
  };

  return (
    <section className="card-container">
      {cards && cards.length > 0 ? (
        <div className="card-grid mx-4 p-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[75vh]">
          {cards.map((concert) => (
            <Card key={concert.id} data={concert} handleDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="default-text-container text-center text-stone-100 mt-14">
          <p className="">No concerts logged yet.</p>
          <p className="">
            Add one above, or&nbsp;
            <button
              className="underline text-purple-400"
              onClick={loadSampleData}
            >
              load 10 examples.
            </button>
          </p>
        </div>
      )}
    </section>
  );
};

export default Grid;
