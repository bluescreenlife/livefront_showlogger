"use client";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Grid from "./Grid";
import getConcertData from "../api/api";
import parseData from "../utils/dataParser";

/* manages data between search input and card grid */
const ParentComponent = () => {
  // useStates for artist and date input from search
  const [artistInput, setArtistInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // list of concert data objects (concertObject)
  const [cards, setCards] = useState([]);

  // trigger API request, get JSON object, parse to concertObject for input to
  // Card component - async as needs to wait for promise to finish and return JSON object
  const handleSearch = async () => {
    try {
      const concertData = await getConcertData(artistInput, dateInput);
      const cardObject = parseData(concertData);
      setCards((prevCards) => [cardObject, ...prevCards]);
    } catch (error) {
      console.log("Error processing search data:", error);
    }
  };

  // log each addition of cardObject
  useEffect(() => {
    console.log(cards); // Log cards whenever it changes
  }, [cards]);

  return (
    <>
      <Search
        onClick={handleSearch}
        setArtistInput={setArtistInput}
        setDateInput={setDateInput}
      />
      <Grid cardList={cards} />
    </>
  );
};

export default ParentComponent;
