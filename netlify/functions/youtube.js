import { config } from "dotenv";

config();

export default async function (request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  const key = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${name}&key=${key}`
  );
  const data = await response.json();

  const id = data.items[0]?.id.videoId;

  return new Response(JSON.stringify(id));
}
