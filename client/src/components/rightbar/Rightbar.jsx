import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
  return (
    <>
    <div className="birthdayContainer">
    <img className="birthdayImg" src="assets/gift.png" alt=""/>
      <span className="birthdayText">
      <b>William smith</b> and <b>4 other friends</b>have a birthday today
      </span>
    </div>
    <img className="rightbarAd" src="assets/ad1.jpg" alt=""/>
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
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/people/1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/people/2.png"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/people/3.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/people/4.png"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/people/5.png"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Roy</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/people/6.jpeg"
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
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
);
}
