import { useState } from "react";
import YouTube from "react-youtube";
import YoutubeItem from "./components/youtube";

export default function App() {
  const [url, setUrl] = useState();
  const [id, setId] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const get_name = event.target.elements.customname.value;
    setUrl(`/.netlify/functions/song?title=${get_name}`);

    const response = await fetch(
      `/.netlify/functions/youtube?name=${get_name}`
    );
    const id = await response.json();
    setId(id);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customname">曲のタイトルと歌手名を入力:</label>
          <input
            type="text"
            id="customname"
            className="input is-info is-small"
            placeholder=""
          />
        </div>
        <div>
          <button>検索</button>
        </div>
      </form>
      <div>
        <YoutubeItem id={id} />
      </div>
      <iframe src={url}></iframe>
    </div>
  );
}
