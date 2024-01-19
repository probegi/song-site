import { config } from "dotenv";

config();

export default async function (request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const key = process.env.GENIUS_TOKEN;

  const songResponse = await fetch(
    `https://api.genius.com/songs/${id}?text_format=html&access_token=${key}`,
    {
      headers: {
        Authorization: `Bearer: ${key}`,
      },
    }
  );

  const songData = await songResponse.json();

  songData.response.song.embed_content;
  const html = songData.response.song.embed_content;

  return new Response(html, {
    headers: {
      "Content-type": "text/html",
    },
  });
}
