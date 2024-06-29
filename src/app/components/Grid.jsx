import Card from "./Card";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Grid = ({
  cardList,
  artistInput,
  setArtistInput,
  dateInput,
  setDateInput,
  handleSearch,
}) => {
  // hooks for monitoring trigger of sampleConcerts load-in
  const [loadingSamples, setLoadingSamples] = useState(false);
  const [sampleIndex, setSampleIndex] = useState(0);

  const sampleConcerts = [
    ["Radiohead", "08/01/2008"],
    ["LCD Soundsystem", "05/22/2024"],
    ["The Cure", "06/08/2023"],
    ["David Byrne", "05/18/2018"],
    ["Good Charlotte", "07/06/2003"],
    ["Modest Mouse", "06/20/2024"],
    ["Arcade Fire", "03/08/2014"],
    ["Queens of the Stone Age", "10/14/2017"],
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
          }, 1500); // 1.5-second delay between each API call
        });
      }
    }
  }, [artistInput, dateInput]);

  const loadSampleData = () => {
    setLoadingSamples(true);
    setSampleIndex(0);
  };

  return (
    <section className="min-h-screen">
      {cardList && cardList.length > 0 ? (
        <div className="cardContainer min-h-screen md:min-h-fit mx-4 p-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[32rem] md:max-h-[28rem]">
          {cardList.map((concert, index) => (
            <Card key={index} data={concert} />
          ))}
        </div>
      ) : (
        <div className="default-text-container text-center mt-14">
          <p className="">No concerts logged yet.</p>
          <p className="">
            Add one above, or&nbsp;
            <button
              className="underline text-purple-400"
              onClick={loadSampleData}
            >
              load some examples.
            </button>
          </p>
        </div>
      )}
    </section>
  );
};

export default Grid;
