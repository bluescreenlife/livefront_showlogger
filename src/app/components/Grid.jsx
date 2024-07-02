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
    ["Arcade Fire", "03/08/2014"],
    ["Third Eye Blind", "06/28/2015"],
    ["Bon Iver", "07/18/2015"],
    ["Queens of the Stone Age", "10/14/2017"],
    ["David Byrne", "05/18/2018"],
    ["The Cure", "06/08/2023"],
    ["Descendents", "06/16/2023"],
    ["LCD Soundsystem", "05/22/2024"],
    ["Modest Mouse", "06/20/2024"],
  ];

  // triggered by loadSampleData function - update artist and date hooks
  useEffect(() => {
    if (loadingSamples && sampleIndex < sampleConcerts.length) {
      const [artist, date] = sampleConcerts[sampleIndex];
      setArtistInput(artist);
      setDateInput(date);
    }
  }, [loadingSamples, sampleIndex]);

  /* sample loader: watches for by artist and date change: ensures values are present in input 
  fields, triggers search, increases index, triggering the next sampleConcert search */
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
    <section
      className="card-container"
      aria-live="polite"
      aria-relevant="additions removals"
    >
      {cards && cards.length > 0 ? (
        <div className="card-grid mx-4 grid max-h-[75vh] grid-cols-1 gap-5 overflow-y-auto p-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((concert) => (
            <Card key={concert.id} data={concert} handleDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="default-text-container mt-14 text-center text-stone-100">
          <p>No concerts logged yet.</p>
          <p>
            Add one above, or&nbsp;
            <button
              className="text-purple-400 underline"
              onClick={loadSampleData}
              aria-label="Load 10 example concerts"
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
