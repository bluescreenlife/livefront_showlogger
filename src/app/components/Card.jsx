import React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ data }) => {
  // useState and function for flipping cards on tap/click
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

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
        className="card-front p-4 h-36 text-stone-100 bg-gradient-to-b from-blue-800 to-purple-600 rounded-lg  "
        onClick={flipCard}
      >
        <span className="concert-info">
          <span className="font-bold text-lg">{data.artist}</span>
          <span className="block text-md">{data.date}</span>
          <span className="block text-sm text-nowrap">
            {data.venue}, {data.city}{" "}
          </span>
        </span>
        <p className="flip-notice text-sm text-right mr-2 pt-4 text-purple-400">
          tap to flip
        </p>
      </div>
      {/* card back */}
      <div
        className="card-back p-4 h-full md:h-36 text-stone-100 bg-gradient-to-b from-blue-600 to-teal-600 rounded-lg"
        onClick={flipCard}
      >
        <div className="setlist-container h-full">
          <span className="setlist-title font-bold sm:text-sm md:h-1/5 md:text-base">
            {data.artist}: Setlist
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
      </div>
    </ReactCardFlip>
  );
};

export default Card;
