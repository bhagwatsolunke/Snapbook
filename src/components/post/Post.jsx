import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users, Posts } from "../../dummyData";

export default function Post({post}) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} aalt="" />
            <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
            <span className="postText">{post?.desc} </span>
            <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                 <span className="postLikeCounter">{post.like} people liked it</span>
            </div>
            <div className="postBottomLeft">
            <span className="postCommentText"> {post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
