import "./message.css";
import {format} from "timeago.js"

export default function Message({ message, own }) { 
   return (
    <div className={own ? "message own" : "message"}> 
         <div className="messageTop">
        <img
          className="messageImg"
          src={
            message.img
              ? `http://localhost:4000/${message.img}`
              : "http://localhost:4000/person/noProfile.jpg"
          }
         alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
