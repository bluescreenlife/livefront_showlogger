import { NextResponse } from "next/server";
import axios from "axios";

/* 
API request to fetch concert data routes through this proxy due to the
setlist.fm API not allowing CORS requests
*/
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const artistName = searchParams.get("artistName");
  const eventDate = searchParams.get("eventDate");

  const encodedArtistName = encodeURIComponent(artistName);
  const API_KEY = "HStiJOTNJ-160cBLXDtq05gBYK6rTKJtNJ28"; // need to import from environment file
  const API_URL = `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${encodedArtistName}&date=${eventDate}&p=1`;

  const headers = {
    Accept: "application/json",
    "x-api-key": API_KEY,
  };

  try {
    const response = await axios.get(API_URL, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(`Error fetching concert data: ${error}`);
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
