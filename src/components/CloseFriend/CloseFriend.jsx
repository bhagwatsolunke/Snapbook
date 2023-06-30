import "./closeFriend.css"

export default function CloseFriend({user}) {
  //  const PF= process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <li className="sidebarFriend">
        <img src={"http://localhost:4000/"+ user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
}
