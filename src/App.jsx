import { useState } from "react";
import YoutubeItem from "./components/youtube";

export default function App() {
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [lyricList, setLyricList] = useState([]);
  const [selectedLyric, setSelectedLyric] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const get_title = event.target.elements.customtitle.value;
    const get_name = event.target.elements.customname.value;

    try {
      const url_res = await fetch(
        `/.netlify/functions/song?title=${get_title} ${get_name}`
      );

      const data = await url_res.json();
      setLyricList(data);
    } catch (error) {
      console.error(error);
    }

    const response = await fetch(
      `/.netlify/functions/youtube?name=${get_title} ${get_name}`
    );
    const list = await response.json();
    setList(list);
  }

  async function getLyric(id) {
    const response = await fetch(`/.netlify/functions/lyric?id=${id}`);
    setUrl(response.url);
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
                <label htmlFor="customtitle">曲名を入力</label>
                <input
                  type="text"
                  id="customtitle"
                  className="input is-info is-small"
                  autocomplete="off"
                  placeholder=""
                />
              </div>
              <div className="pt-3">
                <label htmlFor="customname">歌手名を入力</label>
                <input
                  type="text"
                  id="customname"
                  className="input is-info is-small"
                  autocomplete="off"
                  placeholder=""
                />
              </div>

              <div className="search_button pt-3">
                <button
                  className="button is-link is-light is-normal"
                  type="submit"
                >
                  検索
                </button>
              </div>
            </form>
            <div>
              <div className="pb-4">動画を選択</div>
              <div className="columns is-desktop pb-4">
                {list.map((l) => {
                  return (
                    <div
                      className="column"
                      style={{
                        backgroundColor:
                          selectedId === l.id.videoId && "Aquamarine",
                      }}
                      onClick={() => {
                        setSelectedId(l.id.videoId);
                      }}
                    >
                      <div className="image_container">
                        <img
                          className="thumbnail"
                          key={l.snippet.thumbnails.default.url}
                          src={l.snippet.thumbnails.default.url}
                        />
                      </div>
                      <div className="youtube_title">{l.snippet.title}</div>
                    </div>
                  );
                })}
              </div>
              <div className="pb-4">歌詞を選択</div>
              <div className="columns is-desktop">
                {lyricList.map((l) => {
                  return (
                    <div
                      className="column"
                      style={{
                        backgroundColor:
                          selectedLyric === l.result.id && "Cyan",
                      }}
                      onClick={() => {
                        setSelectedLyric(l.result.id);
                        getLyric(l.result.id);
                      }}
                    >
                      <div className="image_container">
                        <img
                          className="thumbnail"
                          src={l.result.header_image_thumbnail_url}
                        />
                      </div>
                      <div className="youtube_title">{l.result.full_title}</div>
                    </div>
                  );
                })}
              </div>
              <div className="song_result">
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
