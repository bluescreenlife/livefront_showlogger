"use client";
import React, { useState } from "react";
import Card from "./Card";

const Grid = ({ cardList }) => {
  return (
    <section className="flex-1 bg-slate-400 overflow-y-auto pb-20">
      <div className="cardContainer p-4 grid grid-cols-1 gap-4">
        {cardList && cardList.length > 0 ? (
          cardList.map((concert) => <Card key={concert.added} data={concert} />)
        ) : (
          <p>No concerts added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Grid;
