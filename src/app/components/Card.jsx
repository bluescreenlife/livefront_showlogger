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
        className="card-front border-2 border-black rounded shadow-md items-center p-4 overflow-hidden bg-blue-400"
        onClick={flipCard}
      >
        <span className="font-bold text-lg">{data.artist}</span>
        <span className="block">{data.date}</span>
        <span className="block">City: {data.city} </span>
      </div>
      <div
        className="card-back border-2 border-black bg-blue-400 rounded shadow-md p-4"
        onClick={flipCard}
      >
        <span className="font-bold text-lg">Setlist</span>
        <span className="block">
          {data.setlist
            ? data.setlist.map((song, index) => `${index + 1}. ${song} `)
            : "Setlist unavailable."}
        </span>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
