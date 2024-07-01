import React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IoTrashBinOutline } from "react-icons/io5";

const Card = ({ data, handleDelete }) => {
  // useState and function for flipping cards on tap/click
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevents the flipCard function from being called
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
        className="card-front flex flex-col divide-y-2 divide-dotted divide-purple-500 h-40 text-stone-100 bg-gradient-to-b from-blue-800 to-purple-600 rounded-lg  "
        onClick={flipCard}
      >
        <span className="concert-info h-2/3 my-4 px-4 font-DMsans">
          <span className="font-bold text-lg">{data.artist}</span>
          <span className="block text-md">{data.date}</span>
          <span className="block text-sm italic text-nowrap">
            {data.venue}, {data.city}{" "}
          </span>
        </span>
      </div>
      {/* card back */}
      <div className="card-back flex flex-row cols-2 text-stone-100 bg-gradient-to-b from-blue-600 to-teal-600 rounded-lg">
        <div className="flex-parent w-4/5">
          <button className="flex w-full" onClick={flipCard}>
            <div className="setlist-container h-full md:h-40 flex-grow text-left p-4 font-DMsans">
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
        <div className="button-container flex w-1/5">
          <button className="p-6" onClick={handleDeleteClick}>
            <IoTrashBinOutline />
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
