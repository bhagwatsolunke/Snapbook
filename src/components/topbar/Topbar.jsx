import "./topbar.css";
import React, { useState, useContext } from "react"; // Import useState
import { Search, Person, Chat } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from 'axios'; 

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();


  const handleSearch = async () => {
    if (searchInput) {
      try {
        const response = await axios.get(`/users?username=${searchInput}`);
        
        if (response.status === 200) {
          // User found, navigate to their profile
          navigate(`/profile/${searchInput}`);
          setSearchInput(""); // Clear the search input field.
        } else if (response.status === 404) {
          // User not found, handle accordingly
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error searching for user:", error);
      }
    }
  };

  // Event handler for the search input field.
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };


  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <span className="logo">Snapbook </span>{" "}
        </Link>
      </div>
      <div className="topbarCenter">
      <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend"
            className="searchInput"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button className="button-24" onClick={handleSearch}>Search</button>
          </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
          <Link to={`/messenger`}>
            <Chat />
            </Link>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem" onClick={handleLogout}>
            <LogoutIcon />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? `http://localhost:4000/${user.profilePicture}`
                : "http://localhost:4000/person/noProfile.jpg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
