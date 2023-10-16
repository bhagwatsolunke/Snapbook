import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new user object with the user's ID
    const newuser = {
      userId: user._id,
    };


    // If a file is selected, upload it
    if (file) {
      // Upload the image
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newuser.profilePicture = fileName;
      console.log(newuser);
  try {
       await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }

    try {
      // Send a PUT request to update the user's profile
    //  await axios.post("/posts", newPost);
    
      const response = await axios.put(`/users/${user._id}`, newuser);
      console.log("Profile updated:", response.data);

      // Update the user state with the new data
      setUser(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || "http://localhost:4000/person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? `http://localhost:4000/${user.profilePicture}`
                    : "http://localhost:4000/person/noProfile.jpg"
                }
                alt=""
              />
              <label htmlFor="fileInput" className="shareOption">
                <span className="shareOptionText">New profile Picture</span>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <button className="settingsSubmit" onClick={handleSubmit}>
                Update Profile Picture
              </button>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
