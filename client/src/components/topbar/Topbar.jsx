import "./topbar.css";
import{ Person, Search, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div className="topbarContainer">
     <div className="topbarLeft">
     <Link to="/" style={{textDecoration:"none"}}>
     
     <span className="logo">GetSocial</span>
     </Link>
     </div>
     <div className="topbarCenter">
      <div className="searchbar">
      <Search className="searchIcon"/>
      <input placeholder="Search for your friends, posts or videos" className="searchInput"/>
      </div>
     </div>
     <div className="topbarRight">
     <div className="topbarLinks">
     <span className="logo">HomePage</span>
     <span className="logo">TimeLine</span>
     </div>
     <div className="topbarIcons">
      <div className="topbarIconItems">
      <Person/>
      <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconItems">
      <Chat/>
      <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconItems">
      <Notifications/>
      <span className="topbarIconBadge">1</span>
      </div>
     </div>
     <img src="/assets/people/1.jpeg" alt="" className="topbarImg"></img>
     </div>
    </div>
  );
}
