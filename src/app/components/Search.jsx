"use client";
import { React, useState } from "react";
import getConcertData from "../api/api";
import parseData from "../utils/dataParser";

const Search = ({ onClick, setArtistInput, setDateInput }) => {
  return (
    <section className="flex-1 bg-green-300">
      <div className="flex flex-col lg:flex-row items-center lg:mx-10">
        <div className="flex flex-col lg:flex-row items-center lg:w-1/2 px-10 py-4">
          <label
            htmlFor="large-input-1"
            className="block lg:inline-block mb-2 lg:mb-0 lg:mr-2 text-sm font-medium text-gray-900"
          >
            <h3 className="text-black text-xl">I saw:</h3>
          </label>
          <input
            type="text"
            defaultValue={"e.g. Radiohead"} // make greyed out later
            onChange={(e) => setArtistInput(e.target.value)}
            id="large-input-1"
            className="block grow w-full lg:w-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:w-1/2 px-10 py-4">
          <label
            htmlFor="large-input-2"
            className="block lg:inline-block mb-2 lg:mb-0 lg:mr-2 text-sm font-medium text-gray-900"
          >
            <h3 className="text-black text-xl">On:</h3>
          </label>
          <input
            type="text"
            defaultValue={"e.g. 01-08-2008"}
            onChange={(e) => setDateInput(e.target.value)}
            id="large-input-2"
            className="block grow w-full lg:w-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
          ></input>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 my-2 mx-4 lg:mt-0 lg:ml-4 rounded"
          onClick={onClick}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default Search;
