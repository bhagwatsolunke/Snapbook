import "./message.css";

export default function message({own}) {
  return (
    <div className={own ? "message own" : "message"}>      <div className="messageTop">
        <img
          className="messageImg"
          src="https://e0.pxfuel.com/wallpapers/239/709/desktop-wallpaper-beautiful-itachi-this-week-itachi-face.jpg"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          numquam deserunt aut impedit incidunt sint ad
          voluptatibus sunt libero!
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
