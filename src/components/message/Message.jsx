import "./message.css";
import {format} from "timeago.js"

export default function Message({ message, own }) { 
   return (
    <div className={own ? "message own" : "message"}> 
         <div className="messageTop">
        <img
          className="messageImg"
          src="https://e0.pxfuel.com/wallpapers/239/709/desktop-wallpaper-beautiful-itachi-this-week-itachi-face.jpg"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
