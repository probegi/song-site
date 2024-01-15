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

// netlify/functions/youtube.js
var youtube_exports = {};
__export(youtube_exports, {
  default: () => youtube_default
});
module.exports = __toCommonJS(youtube_exports);
var import_dotenv = require("dotenv");
(0, import_dotenv.config)();
async function youtube_default(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  const key = process.env.YOUTUBE_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${key}`
  );
  const data = await response.json();
  return new Response(JSON.stringify(data.items));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMveW91dHViZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xyXG5cclxuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IG5hbWUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm5hbWVcIik7XHJcblxyXG4gIGNvbnN0IGtleSA9IHByb2Nlc3MuZW52LllPVVRVQkVfQVBJX0tFWTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaD9wYXJ0PXNuaXBwZXQmcT0ke25hbWV9JmtleT0ke2tleX1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEuaXRlbXMpKTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF1QjtBQUFBLElBRXZCLHNCQUFPO0FBRVAsZUFBTyxnQkFBd0IsU0FBUztBQUN0QyxRQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVEsR0FBRztBQUMvQixRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUksTUFBTTtBQUV4QyxRQUFNLE1BQU0sUUFBUSxJQUFJO0FBRXhCLFFBQU0sV0FBVyxNQUFNO0FBQUEsSUFDckIsK0RBQStELElBQUksUUFBUSxHQUFHO0FBQUEsRUFDaEY7QUFDQSxRQUFNLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFFakMsU0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLEtBQUssS0FBSyxDQUFDO0FBQ2hEOyIsCiAgIm5hbWVzIjogW10KfQo=
