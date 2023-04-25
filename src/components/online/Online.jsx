import "./online.css"

export default function Online({user}) {
  return (
    <div>
         <li className="rightbarFriend" >
        <div className="rightbarProfileImgContainer">
          <img className="rightbarProfileImg" src={"http://localhost:4000/images/"+user.profilePicture} alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  )
}
