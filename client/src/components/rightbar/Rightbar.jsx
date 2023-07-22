import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
  return (
    <>
    <div className="birthdayContainer">
    <img className="birthdayImg" src="{`${PF}/gift.png" alt=""/>
      <span className="birthdayText">
      <b>William smith</b> and <b>4 other friends</b>have a birthday today
      </span>
    </div>
    <img className="rightbarAd" src="{`${PF}/ad1.jpg" alt=""/>
     <h4 className="rightbarTitle">Online</h4> 
     <ul className="rightbarFriendList">
     {Users.map((u) => (
      <Online key={u.id} user={u} />
    ))}
  </ul>
   </>   
  );
};
const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">
          {user.relationship === 1
            ? "Single"
            : user.relationship === 1
            ? "Married"
            : "-"}
          </span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src={`${PF}people/1.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}people/2.png`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}people/3.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}people/4.png`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}people/5.png`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src={`${PF}people/6.jpeg`}
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
      </div>
    </>
  );
};
return (
  <div className="rightbar">
    <div className="rightbarWrapper">
      {user ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
);
}
