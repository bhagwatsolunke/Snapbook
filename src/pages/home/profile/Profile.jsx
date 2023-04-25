import "./profile.css";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router"

export default function Profile() {
  const [user,setUser] = useState({});
  const username = useParams().username;

  useEffect(()=>{
    const fetchUser =async ()=>{
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    };
   fetchUser();
  }, [username]);

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || `${"http://localhost:3000/assets/"}person/noCover.jpg`  }
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || `${"http://localhost:3000/assets/"}person/noProfile.jpg`  }               
                 alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
