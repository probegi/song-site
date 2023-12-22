var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/song.js
var song_exports = {};
__export(song_exports, {
  default: () => song_default
});
module.exports = __toCommonJS(song_exports);
var import_dotenv = require("dotenv");
(0, import_dotenv.config)();
async function song_default(request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  const key = process.env.GENIUS_TOKEN;
  const response = await fetch(
    `https://api.genius.com/search?q=${title}&access_token=${key}`,
    {
      headers: {
        Authorization: `Bearer: ${key}`
      }
    }
  );
  const data = await response.json();
  if (data.response.hits.length == 0) {
    return;
  }
  const id = data.response.hits[0].result.id;
  const songResponse = await fetch(
    `https://api.genius.com/songs/${id}?text_format=html&access_token=${key}`,
    {
      headers: {
        Authorization: `Bearer: ${key}`
      }
    }
  );
  const songData = await songResponse.json();
  songData.response.song.embed_content;
  const html = songData.response.song.embed_content;
  return new Response(html, {
    headers: {
      "Content-type": "text/html"
    }
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc29uZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xyXG5cclxuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHRpdGxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ0aXRsZVwiKTtcclxuXHJcbiAgY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuR0VOSVVTX1RPS0VOO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmdlbml1cy5jb20vc2VhcmNoP3E9JHt0aXRsZX0mYWNjZXNzX3Rva2VuPSR7a2V5fWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyOiAke2tleX1gLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZiAoZGF0YS5yZXNwb25zZS5oaXRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vY29uc29sZS5sb2coZGF0YS5yZXNwb25zZS5oaXRzWzBdLnJlc3VsdC5pZCk7XHJcbiAgY29uc3QgaWQgPSBkYXRhLnJlc3BvbnNlLmhpdHNbMF0ucmVzdWx0LmlkO1xyXG5cclxuICBjb25zdCBzb25nUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS5nZW5pdXMuY29tL3NvbmdzLyR7aWR9P3RleHRfZm9ybWF0PWh0bWwmYWNjZXNzX3Rva2VuPSR7a2V5fWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyOiAke2tleX1gLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3Qgc29uZ0RhdGEgPSBhd2FpdCBzb25nUmVzcG9uc2UuanNvbigpO1xyXG4gIC8vY29uc29sZS5sb2coc29uZ0RhdGEucmVzcG9uc2Uuc29uZy5lbWJlZF9jb250ZW50KTtcclxuICBzb25nRGF0YS5yZXNwb25zZS5zb25nLmVtYmVkX2NvbnRlbnQ7XHJcblxyXG4gIGNvbnN0IGh0bWwgPSBzb25nRGF0YS5yZXNwb25zZS5zb25nLmVtYmVkX2NvbnRlbnQ7XHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShodG1sLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC10eXBlXCI6IFwidGV4dC9odG1sXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXVCO0FBQUEsSUFFdkIsc0JBQU87QUFFUCxlQUFPLGFBQXdCLFNBQVM7QUFDdEMsUUFBTSxNQUFNLElBQUksSUFBSSxRQUFRLEdBQUc7QUFDL0IsUUFBTSxRQUFRLElBQUksYUFBYSxJQUFJLE9BQU87QUFFMUMsUUFBTSxNQUFNLFFBQVEsSUFBSTtBQUV4QixRQUFNLFdBQVcsTUFBTTtBQUFBLElBQ3JCLG1DQUFtQyxLQUFLLGlCQUFpQixHQUFHO0FBQUEsSUFDNUQ7QUFBQSxNQUNFLFNBQVM7QUFBQSxRQUNQLGVBQWUsV0FBVyxHQUFHO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFFBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUVqQyxNQUFJLEtBQUssU0FBUyxLQUFLLFVBQVUsR0FBRztBQUNsQztBQUFBLEVBQ0Y7QUFFQSxRQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssQ0FBQyxFQUFFLE9BQU87QUFFeEMsUUFBTSxlQUFlLE1BQU07QUFBQSxJQUN6QixnQ0FBZ0MsRUFBRSxrQ0FBa0MsR0FBRztBQUFBLElBQ3ZFO0FBQUEsTUFDRSxTQUFTO0FBQUEsUUFDUCxlQUFlLFdBQVcsR0FBRztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFdBQVcsTUFBTSxhQUFhLEtBQUs7QUFFekMsV0FBUyxTQUFTLEtBQUs7QUFFdkIsUUFBTSxPQUFPLFNBQVMsU0FBUyxLQUFLO0FBQ3BDLFNBQU8sSUFBSSxTQUFTLE1BQU07QUFBQSxJQUN4QixTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
