import Message from "../../components/message/Message"
import Conversation from "../../components/conversations/conversation"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import React from 'react'
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { AuthContext } from "../../context/AuthContext"
import { useContext , useEffect , useState } from "react"
import axios from "axios";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);

   const {user} = useContext(AuthContext);

   useEffect(()=>{
    const getConversations= async ()=>{
      try{
      const res = await axios.get("/conversations"+user._id)
      setConversations(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getConversations();
   },[user._id]);

  return (
    <>
    <Topbar/>
    <div className="messenger">
    <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input placeholder="Search for friends"/>
        { conversations.map((c)=>(
          <Conversation Conversation={c} currentUser={user} />

        ))

        }
       
      </div>
    </div>
    <div className="chatBox">
      <div className="chatBoxWrapper">
        <div className="chatBoxTop">
        <Message own={true}/>
        <Message/>
        <Message own={true}/>
        <Message/>
       
        </div>
        <textarea className="chatMessageInput" placeholder="Write something..."></textarea>
        <button className="chatSubmitButton">send</button>
      </div>
    </div>
    <div className="chatOnline">
      <div className="chatOnlineWrapper">
        <ChatOnline/>
      </div>
    </div>
    </div>
    </>
  )
}
