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
        className="card-front p-4 h-40 text-stone-800 bg-cyan-400 rounded-lg shadow-lg"
        onClick={flipCard}
      >
        <span className="font-bold text-lg">{data.artist}</span>
        <span className="block text-md">{data.date}</span>
        <span className="block text-md">
          {data.venue}, {data.city}{" "}
        </span>
      </div>
      <div
        className="card-back h-40 overflow-y-scroll text-stone-100 bg-cyan-700 rounded-lg p-4"
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
