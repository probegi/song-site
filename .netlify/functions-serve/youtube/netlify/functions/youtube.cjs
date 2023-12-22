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
    `https://www.googleapis.com/youtube/v3/search?q=${name}&key=${key}`
  );
  const data = await response.json();
  const id = data.items[0]?.id.videoId;
  return new Response(JSON.stringify(id));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMveW91dHViZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xyXG5cclxuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IG5hbWUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm5hbWVcIik7XHJcblxyXG4gIGNvbnN0IGtleSA9IHByb2Nlc3MuZW52LllPVVRVQkVfQVBJX0tFWTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaD9xPSR7bmFtZX0ma2V5PSR7a2V5fWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGlkID0gZGF0YS5pdGVtc1swXT8uaWQudmlkZW9JZDtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShpZCkpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXVCO0FBQUEsSUFFdkIsc0JBQU87QUFFUCxlQUFPLGdCQUF3QixTQUFTO0FBQ3RDLFFBQU0sTUFBTSxJQUFJLElBQUksUUFBUSxHQUFHO0FBQy9CLFFBQU0sT0FBTyxJQUFJLGFBQWEsSUFBSSxNQUFNO0FBRXhDLFFBQU0sTUFBTSxRQUFRLElBQUk7QUFFeEIsUUFBTSxXQUFXLE1BQU07QUFBQSxJQUNyQixrREFBa0QsSUFBSSxRQUFRLEdBQUc7QUFBQSxFQUNuRTtBQUNBLFFBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUVqQyxRQUFNLEtBQUssS0FBSyxNQUFNLENBQUMsR0FBRyxHQUFHO0FBRTdCLFNBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLENBQUM7QUFDeEM7IiwKICAibmFtZXMiOiBbXQp9Cg==
