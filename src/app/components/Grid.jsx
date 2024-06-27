"use client";
import Card from "./Card";

const Grid = ({ cardList }) => {
  return (
    <section className="">
      {cardList && cardList.length > 0 ? (
        <div className="cardContainer h-full bg-sky-900 rounded-xl m-4 p-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardList.map((concert) => (
            <Card key={concert.added} data={concert} />
          ))}
        </div>
      ) : (
        <p className="text-center justify-center h-full">
          No concerts logged yet.
        </p>
      )}
    </section>
  );
};

export default Grid;
