import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import "./online.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/"+ user._id);
      setFriends(res.data);
    };

    getFriends();
  }, [user]);

  // console.log(friends);
  useEffect(() => {
    if (Array.isArray(friends)) {
      setOnlineFriends(friends);
    }
  }, [friends]);
  
  // useEffect(() => {
  //   onlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  // }, [friends, onlineUsers]);

  
  
  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o.profilePicture
                  ? `http://localhost:4000/${o.profilePicture}`
                  : "http://localhost:4000/person/noProfile.jpg"
              }      
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}