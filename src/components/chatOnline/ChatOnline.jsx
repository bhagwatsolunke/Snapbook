import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get("/users/friends/" + currentId);
        setFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getFriends();
  }, [currentId]);

  const handleClick = async (friend) => {
    try {
      const conversationRes = await axios.get(`/conversations/find/${currentId}/${friend._id}`);
      const existingConversation = conversationRes.data;

      if (existingConversation) {
        setCurrentChat(existingConversation);
      } else {
        const newConversationRes = await axios.post("/conversations", {
          senderId: currentId,
          receiverId: friend._id,
        });

        setCurrentChat(newConversationRes.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <>
  <h2>Friends</h2>
    <div className="chatOnline">
      {friends.map((friend) => (
        <div className="chatOnlineFriend" key={friend._id} onClick={() => handleClick(friend)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                friend.profilePicture
                  ? `http://localhost:4000/${friend.profilePicture}`
                  : "http://localhost:4000/person/noProfile.jpg"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{friend.username}</span>
        </div>
      ))}
    </div>
    </>
  );
}
