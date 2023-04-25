import "./topbar.css";
import {Search,Person,Chat,Notifications} from "@mui/icons-material";
import { useContext } from "react";
import {Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
const {user}= useContext (AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
  <Link to="/" style={{textDecoration:"none"}}> <span className="logo">Snapbook </span> </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search  className="searchIcon"/>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
         <Person/>
         <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
         <Chat/>
         <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem">
         <Notifications/>
         <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to ={`/profile/${user.username}`}>
        <img src= {user.profilePicture ? "http://localhost:3000/assets/"+user.profilePicture : "http://localhost:3000/assets/"+"person/noProfile.jpg"  }   alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
