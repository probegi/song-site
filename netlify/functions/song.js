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
  // console.log(data);
  if (data.response.hits.length == 0) {
    return;
  }
  //console.log(data.response.hits[0].result.id);
  const id = data.response.hits[0].result.id;

  const songResponse = await fetch(
    `https://api.genius.com/songs/${id}?text_format=html&access_token=${key}`,
    {
      headers: {
        Authorization: `Bearer: ${key}`,
      },
    }
  );
  const songData = await songResponse.json();
  //console.log(songData.response.song.embed_content);
  songData.response.song.embed_content;

  const html = songData.response.song.embed_content;
  return new Response(html, {
    headers: {
      "Content-type": "text/html",
    },
  });
}
