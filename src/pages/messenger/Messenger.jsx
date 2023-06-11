import Message from "../../components/message/Message"
import Conversation from "../../components/conversations/conversation"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import React from 'react'
import ChatOnline from "../../components/chatOnline/ChatOnline"

export default function Messenger() {
  return (
    <>
    <Topbar/>
    <div className="messenger">
    <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input placeholder="Search for friends"/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
      </div>
    </div>
    <div className="chatBox">
      <div className="chatBoxWrapper">
        <div className="chatBoxTop">
        <Message own={true}/>
        <Message/>
        <Message own={true}/>
        <Message/>
        <Message own={true}/>
        <Message/>
        <Message own={true}/>
        <Message/>
        <Message own={true}/>
        <Message/>
        <Message own={true}/>
        <Message/>
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
