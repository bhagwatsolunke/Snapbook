import "./sidebar.css"
import {RssFeed,Group,ChatBubble, Event,School, Bookmark, HelpOutline, PlayCircleFilledOutlined, WorkOutline } from "@mui/icons-material";


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
          Bookmarks
        </span>
          </li>
          <li className="sidebarListItem">
        <HelpOutline className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Questions
        </span>
          </li>
          <li className="sidebarListItem">
        <WorkOutline className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Jobs
        </span>
          </li>
          <li className="sidebarListItem">
        <Event className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Events
        </span>
          </li>
          <li className="sidebarListItem">
        <School className="sidebarIcon"/>
        <span className="sidebarListItemText">
          Courses
        </span>
          </li>
        </ul>
        <button className="sidebarButton"> Show more</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img src="/assets/person/11.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            Akash Tale
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            om sore
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">
            shantanu Waghamare
          </span>
        </li>
      </ul>
      </div>
    </div>
  )
}
  