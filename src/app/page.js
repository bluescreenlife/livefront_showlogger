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
      // console.log("Attempting search for", artistInput, "on", dateInput, "...");
      const concertData = await getConcertData(artistInput, dateInput);
      const cardObject = parseData(concertData);
      setCards((prevCards) => [cardObject, ...prevCards]);
      setArtistInput("");
      setDateInput("");
    } catch (error) {
      console.error("Error processing search data:", error);
    }
  };

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  // log cardObject changes
  // useEffect(() => {
  //   console.log("Cards change detected. Current state:", cards);
  // }, [cards]);

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
        cards={cards}
        setCards={setCards}
        handleSearch={handleSearch}
        artistInput={artistInput}
        setArtistInput={setArtistInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
        handleDelete={handleDelete}
      />
    </main>
  );
}
