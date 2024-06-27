"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import getConcertData from "./api/api";
import parseData from "./utils/dataParser";

export default function Home() {
  // useStates for artist and date input from search
  const [artistInput, setArtistInput] = useState("e.g. Radiohead");
  const [dateInput, setDateInput] = useState("e.g. 01-08-2018");

  // list of concert data objects (concertObject)
  const [cards, setCards] = useState([]);

  // trigger API request, get JSON object, parse to concertObject for input to
  // Card component - async as needs to wait for promise to finish and return JSON object
  const handleSearch = async () => {
    try {
      const concertData = await getConcertData(artistInput, dateInput);
      const cardObject = parseData(concertData);
      setCards((prevCards) => [cardObject, ...prevCards]);
      setArtistInput("");
      setDateInput("");
    } catch (error) {
      console.log("Error processing search data:", error);
    }
  };

  // log each addition of cardObject
  useEffect(() => {
    console.log(cards); // Log cards whenever it changes
  }, [cards]);

  return (
    <main className="bg-sky-900">
      <Hero
        handleSearch={handleSearch}
        artistInput={artistInput}
        setArtistInput={setArtistInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
      />
      <Grid cardList={cards} />
    </main>
  );
}
