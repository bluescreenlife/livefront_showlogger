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
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <div
        className="card-front p-4 h-32 text-stone-100 bg-gradient-to-b from-blue-800 to-purple-600 rounded-lg  "
        onClick={flipCard}
      >
        <span className="concert-info">
          <span className="font-bold text-lg">{data.artist}</span>
          <span className="block text-md">{data.date}</span>
          <span className="block text-sm text-nowrap">
            {data.venue}, {data.city}{" "}
          </span>
        </span>
        <p className="flip-notice text-sm text-right mr-2 text-purple-400">
          tap to flip
        </p>
      </div>
      <div
        className="card-back p-4 h-full md:h-32 overflow-y-scroll text-stone-100 bg-gradient-to-b from-blue-600 to-teal-600 rounded-lg"
        onClick={flipCard}
      >
        <span className="font-bold sm:text-sm md:text-base">
          {data.artist}: Setlist
        </span>
        <span className="block sm:text-sm md:text-base">
          {data.setlist
            ? data.setlist.map((song, index) => (
                <span key={index} className="block">
                  {index + 1}. {song}
                </span>
              ))
            : "Setlist unavailable."}
        </span>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
