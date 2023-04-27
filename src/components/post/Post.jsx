import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useContext, useEffect , useState } from "react";
import axios from "axios";
import {format} from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post, onDelete }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
 
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/posts/${post._id}`);
      onDelete(post._id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? `http://localhost:4000/images/${user.profilePicture}`
                    : "http://localhost:4000/images/person/noProfile.jpg"
                }
                alt={`${user.username}'s profile picture`}
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          <img
            className="postImg"
            src={`http://localhost:4000/images/${post.img}`}
            alt={`${user.username}'s post`}
          />
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src={`${"http://localhost:4000/images/"}like.png`} onClick={likeHandler} alt="" />
                <img className="likeIcon" src={`${"http://localhost:4000/images/"}heart.png`} onClick={likeHandler} alt="" />
                 <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomLeft">
            <span className="postCommentText"> {post.comment} Comments</span>
            <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
            </div>
        </div>
      </div>
    </div>
  );
}
