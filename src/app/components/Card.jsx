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
        className="card-front text-stone-800 border-black bg-cyan-400 rounded shadow-md items-center p-4 overflow-hidden"
        onClick={flipCard}
      >
        <span className="font-bold text-lg">{data.artist}</span>
        <span className="block text-md">{data.date}</span>
        <span className="block text-md">
          {data.venue}, {data.city}{" "}
        </span>
        <span>
          <h3 className="text-right pr-4">Flip ➡️</h3>
        </span>
      </div>
      <div
        className="card-back text-stone-100 border-black bg-cyan-700 rounded shadow-md p-4"
        onClick={flipCard}
      >
        <span className="font-bold sm:text-sm md:text-base">Setlist</span>
        <span className="block sm:text-sm md:text-base">
          {data.setlist
            ? data.setlist.map((song, index) => `${index + 1}. ${song} `)
            : "Setlist unavailable."}
        </span>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
