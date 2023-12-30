import { useState } from "react";
import YoutubeItem from "./components/youtube";

export default function App() {
  const [url, setUrl] = useState();
  const [id, setId] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const get_title = event.target.elements.customtitle.value;
    const get_name = event.target.elements.customname.value;
    setUrl(`/.netlify/functions/song?title=${get_title} ${get_name}`);

    const response = await fetch(
      `/.netlify/functions/youtube?name=${get_title} ${get_name}`
    );
    const id = await response.json();
    setId(id);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customtitle">曲のタイトルを入力:</label>
          <input
            type="text"
            id="customtitle"
            className="input is-info is-small"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="customname">歌手名を入力:</label>
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
