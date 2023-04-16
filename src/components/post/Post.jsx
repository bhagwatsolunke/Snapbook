import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.png" alt="" />
            <span className="postUsername">bhagwat solunke</span>
            <span className="postDate">50 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
            <span className="postText">Hey! its my first Post:) </span>
            <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                 <span className="postLikeCounter">936 people liked it</span>
            </div>
            <div className="postBottomLeft">
            <span className="postCommentText"> 93 Comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
