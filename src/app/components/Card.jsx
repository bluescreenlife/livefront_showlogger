import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IoTrashBinOutline } from "react-icons/io5";

const Card = ({ data, handleDelete }) => {
  // useState and function for flipping cards on tap/click
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  // card flip needs disabling before deletion due to concurrent event handling error
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleDelete(data.id);
  };

  return (
    <ReactCardFlip
      flipDirection="vertical"
      isFlipped={isFlipped}
      infinite={true}
      flipSpeedBackToFront={0.8}
      flipSpeedFrontToBack={0.8}
    >
      {/* card front */}
      <div
        className="card-front flex h-40 flex-col divide-purple-500 rounded-lg bg-gradient-to-b from-blue-800 to-purple-600 text-stone-100 md:duration-300 md:hover:-translate-y-1"
        onClick={flipCard}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && flipCard()}
        aria-label={`Concert details for ${data.artist} on ${data.date}`}
      >
        <span className="concert-details my-4 h-2/3 px-4 font-DMsans">
          <span className="artist-name text-lg font-bold">{data.artist}</span>
          <span className="concert-date text-md block">{data.date}</span>
          <span className="concert-location block text-nowrap text-sm italic">
            {data.venue}, {data.city}{" "}
          </span>
        </span>
        <span className="flip-notice pb-2 text-center text-sm text-purple-400">
          tap to flip
        </span>
      </div>
      {/* card back */}
      <div
        className="card-back cols-2 flex flex-row rounded-lg bg-gradient-to-b from-blue-600 to-teal-600 text-stone-100 md:duration-300 md:hover:-translate-y-1"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && flipCard()}
        aria-label={`Setlist for ${data.artist} on ${data.date}`}
      >
        <div className="flex-parent w-4/5">
          <button
            className="flip-button flex w-full"
            onClick={flipCard}
            aria-label="Flip to front"
          >
            <div className="setlist-container h-full flex-grow p-4 text-left font-DMsans md:h-40">
              <span className="setlist-title font-bold sm:text-sm md:h-1/5 md:text-base">
                Setlist
              </span>
              <span className="setlist-text block text-sm md:h-4/5 md:overflow-y-scroll">
                {data.setlist
                  ? data.setlist.map((song, index) => (
                      <span key={index} className="block">
                        {index + 1}. {song}
                      </span>
                    ))
                  : "Setlist unavailable."}
              </span>
            </div>
          </button>
        </div>
        <div className="del-button-container flex w-1/5">
          <button
            className="delete-button p-6"
            onClick={handleDeleteClick}
            aria-label="Delete concert"
          >
            <IoTrashBinOutline />
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
