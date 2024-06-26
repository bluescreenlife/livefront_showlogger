"use client";
import Card from "./Card";

const Grid = ({ cardList }) => {
  return (
    <section className="flex-1 overflow-y-auto bg-slate-400">
      <div className="cardContainer h-full  p-4 grid grid-cols-1 gap-4">
        {cardList && cardList.length > 0 ? (
          cardList.map((concert) => <Card key={concert.added} data={concert} />)
        ) : (
          <p className="text-center justify-center h-full">
            No concerts added yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Grid;
