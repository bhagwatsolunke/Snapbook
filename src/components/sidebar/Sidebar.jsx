import "./sidebar.css"
import {RssFeed,Group,ChatBubble, Event,School, Bookmark, HelpOutline, PlayCircleFilledOutlined, WorkOutline } from "@mui/icons-material";
import {Users} from "../../dummyData"
import CloseFriend from "../CloseFriend/CloseFriend";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
        <RssFeed className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Feed
        </span> 
          </li>
          <li className="sidebarListItem">
        <ChatBubble className="sidebarIcon"/>
        <span className="sidebarListItemText">
          chats
        </span>
          </li>
          <li className="sidebarListItem">
        <PlayCircleFilledOutlined className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Videos
        </span>
          </li>
          <li className="sidebarListItem">
        <Group className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Groups
        </span>
          </li>
          <li className="sidebarListItem">
        <Bookmark className="sidebarIcon"/>
        <span className="sidebarListItemText">
        Favourite
        </span>
          </li>
          
          <li className="sidebarListItem">
        <WorkOutline className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Work for Us
        </span>
          </li>
          <li className="sidebarListItem">
        <Event className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Events
        </span>
          </li>
         
        </ul>
        <button className="sidebarButton"> Show more</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
       {Users.map(u=>(
        <CloseFriend key={u.id} user={u}/>
        ))}
      </ul>
      </div>
    </div>
  )
}
  