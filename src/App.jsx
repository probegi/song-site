import { useState } from "react";
import YoutubeItem from "./components/youtube";

export default function App() {
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const get_title = event.target.elements.customtitle.value;
    const get_name = event.target.elements.customname.value;
    const url_res = await fetch(
      `/.netlify/functions/song?title=${get_title} ${get_name}`
    );

    console.log("res", url_res);

    if (url_res.status === 204) {
      setUrl(null);
    } else {
      setUrl(url_res.url);
    }

    const response = await fetch(
      `/.netlify/functions/youtube?name=${get_title} ${get_name}`
    );
    const list = await response.json();
    setList(list);
    console.log(list);
  }

  return (
    <>
      <header className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">動画・歌詞検索サイト</h1>
          </div>
        </div>
      </header>
      <main>
        <section className="section">
          <div className="container">
            <form className="enter-block" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="customtitle">曲名を入力:</label>
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
                <button
                  className="button is-link is-light is-small"
                  type="submit"
                >
                  検索
                </button>
              </div>
            </form>
            <div>
              <div className="columns is-desktop">
                {list.map((l) => {
                  return (
                    <div
                      className="column"
                      onClick={() => {
                        setSelectedId(l.id.videoId);
                      }}
                    >
                      <img
                        className="thumbnail"
                        key={l.snippet.thumbnails.default.url}
                        src={l.snippet.thumbnails.default.url}
                      />
                      <div className="youtube_title">{l.snippet.title}</div>
                    </div>
                  );
                })}
              </div>

              <div>
                <YoutubeItem id={selectedId} />
              </div>
              <div>
                {url === null ? (
                  <div>歌詞を取得できませんでした。</div>
                ) : (
                  <iframe src={url}></iframe>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            from&ensp;
            <a href="https://developers.google.com/youtube/v3/docs/search/list?hl=ja">
              YouTube Data API v3
            </a>
            <br></br>
            <a href="https://docs.genius.com/#/getting-started-h1">
              Genius API
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
