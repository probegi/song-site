import { config } from "dotenv";

config();

export default async function (request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");

  const key = process.env.GENIUS_TOKEN;

  const response = await fetch(
    `https://api.genius.com/search?q=${title}&access_token=${key}`,
    {
      headers: {
        Authorization: `Bearer: ${key}`,
      },
    }
  );
  const data = await response.json();
  if (data.response.hits.length == 0) {
    return;
  }

  return new Response(JSON.stringify(data.response.hits.slice(0, 5)));
}
