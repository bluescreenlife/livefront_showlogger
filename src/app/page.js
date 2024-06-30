"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import getConcertData from "./api/api";
import parseData from "./utils/dataParser";

export default function Home() {
  // useStates for artist and date input from search
  const [artistInput, setArtistInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // list of concert data objects (concertObject)
  const [cards, setCards] = useState([]);

  // trigger API request, get JSON object, parse to concertObject for input to
  // Card component - async as needs to wait for promise to finish and return JSON object
  const handleSearch = async () => {
    try {
      console.log("Attempting search for", artistInput, "on", dateInput, "...");
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
    console.log("Cards change detected. Current state:", cards); // Log cards whenever it changes
  }, [cards]);

  return (
    <main className="min-h-screen bg-neutral-900">
      <Hero
        handleSearch={handleSearch}
        artistInput={artistInput}
        setArtistInput={setArtistInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
      />
      <Grid
        cardList={cards}
        handleSearch={handleSearch}
        artistInput={artistInput}
        setArtistInput={setArtistInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
      />
    </main>
  );
}
