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
  return new Response(JSON.stringify(data.response.hits.slice(0, 5)));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc29uZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xyXG5cclxuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHRpdGxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ0aXRsZVwiKTtcclxuXHJcbiAgY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuR0VOSVVTX1RPS0VOO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmdlbml1cy5jb20vc2VhcmNoP3E9JHt0aXRsZX0mYWNjZXNzX3Rva2VuPSR7a2V5fWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyOiAke2tleX1gLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoZGF0YS5yZXNwb25zZS5oaXRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEucmVzcG9uc2UuaGl0cy5zbGljZSgwLCA1KSkpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXVCO0FBQUEsSUFFdkIsc0JBQU87QUFFUCxlQUFPLGFBQXdCLFNBQVM7QUFDdEMsUUFBTSxNQUFNLElBQUksSUFBSSxRQUFRLEdBQUc7QUFDL0IsUUFBTSxRQUFRLElBQUksYUFBYSxJQUFJLE9BQU87QUFFMUMsUUFBTSxNQUFNLFFBQVEsSUFBSTtBQUV4QixRQUFNLFdBQVcsTUFBTTtBQUFBLElBQ3JCLG1DQUFtQyxLQUFLLGlCQUFpQixHQUFHO0FBQUEsSUFDNUQ7QUFBQSxNQUNFLFNBQVM7QUFBQSxRQUNQLGVBQWUsV0FBVyxHQUFHO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFFBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUNqQyxNQUFJLEtBQUssU0FBUyxLQUFLLFVBQVUsR0FBRztBQUNsQztBQUFBLEVBQ0Y7QUFFQSxTQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsS0FBSyxTQUFTLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BFOyIsCiAgIm5hbWVzIjogW10KfQo=
