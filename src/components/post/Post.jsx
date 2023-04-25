import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useContext, useEffect , useState } from "react";
import axios from "axios";
import {format} from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user,setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  // const PF= process.env.REACT_APP_PUBLIC_FOLDER;

  
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
            
            <img className="postProfileImg" src={user.profilePicture ? "http://localhost:4000/images/"+ user.profilePicture:  "http://localhost:4000/images/" +"person/noProfile.jpg" } alt="" />
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
            <img className="postImg" src={ "http://localhost:4000/images/"+post.img} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src={`${"http://localhost:4000/images/"}like.png`} onClick={likeHandler} alt="" />
                <img className="likeIcon" src={`${"http://localhost:4000/images/"}heart.png`} onClick={likeHandler} alt="" />
                 <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomLeft">
            <span className="postCommentText"> {post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
