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

// netlify/functions/lyric.js
var lyric_exports = {};
__export(lyric_exports, {
  default: () => lyric_default
});
module.exports = __toCommonJS(lyric_exports);
var import_dotenv = require("dotenv");
(0, import_dotenv.config)();
async function lyric_default(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const key = process.env.GENIUS_TOKEN;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvbHlyaWMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcclxuXHJcbmNvbmZpZygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcXVlc3QpIHtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCBpZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcblxyXG4gIGNvbnN0IGtleSA9IHByb2Nlc3MuZW52LkdFTklVU19UT0tFTjtcclxuXHJcbiAgY29uc3Qgc29uZ1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkuZ2VuaXVzLmNvbS9zb25ncy8ke2lkfT90ZXh0X2Zvcm1hdD1odG1sJmFjY2Vzc190b2tlbj0ke2tleX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlcjogJHtrZXl9YCxcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBzb25nRGF0YSA9IGF3YWl0IHNvbmdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHNvbmdEYXRhLnJlc3BvbnNlLnNvbmcuZW1iZWRfY29udGVudDtcclxuICBjb25zdCBodG1sID0gc29uZ0RhdGEucmVzcG9uc2Uuc29uZy5lbWJlZF9jb250ZW50O1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKGh0bWwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdUI7QUFBQSxJQUV2QixzQkFBTztBQUVQLGVBQU8sY0FBd0IsU0FBUztBQUN0QyxRQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVEsR0FBRztBQUMvQixRQUFNLEtBQUssSUFBSSxhQUFhLElBQUksSUFBSTtBQUVwQyxRQUFNLE1BQU0sUUFBUSxJQUFJO0FBRXhCLFFBQU0sZUFBZSxNQUFNO0FBQUEsSUFDekIsZ0NBQWdDLEVBQUUsa0NBQWtDLEdBQUc7QUFBQSxJQUN2RTtBQUFBLE1BQ0UsU0FBUztBQUFBLFFBQ1AsZUFBZSxXQUFXLEdBQUc7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxXQUFXLE1BQU0sYUFBYSxLQUFLO0FBRXpDLFdBQVMsU0FBUyxLQUFLO0FBQ3ZCLFFBQU0sT0FBTyxTQUFTLFNBQVMsS0FBSztBQUVwQyxTQUFPLElBQUksU0FBUyxNQUFNO0FBQUEsSUFDeEIsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
