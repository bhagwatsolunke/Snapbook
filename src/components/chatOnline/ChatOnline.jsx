import "./chatOnline.css";

import React from "react";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img  className="chatOnlineImg"
            src="https://e0.pxfuel.com/wallpapers/239/709/desktop-wallpaper-beautiful-itachi-this-week-itachi-face.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">vijay shinde</span>
      </div>
    </div>
  );
}
