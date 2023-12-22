import React from "react";
import Youtube from "react-youtube";

function YoutubeItem({ id }) {
  return (
    <Youtube
      videoId={id} //挿入したいyoutube動画のURL末尾を入力
    />
  );
}
export default YoutubeItem;
