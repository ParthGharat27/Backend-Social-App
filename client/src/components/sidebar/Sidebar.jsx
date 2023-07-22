import "./sidebar.css"
import { RssFeed } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { PlayCircle } from "@mui/icons-material";
import { Groups2 } from "@mui/icons-material";
import { Bookmarks } from "@mui/icons-material";
import { Help } from "@mui/icons-material";
import { WorkOutline } from "@mui/icons-material";
import { EventNote } from "@mui/icons-material";
import { School } from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
        <RssFeed className="sidebarIcon"/>
        <span className="sidebarItemListText">Feed</span>
        </li>

        <li className="sidebarListItem">
        <Chat className="sidebarIcon"/>
        <span className="sidebarItemListText">Chats</span>
        </li>

        <li className="sidebarListItem">
        <PlayCircle className="sidebarIcon"/>
        <span className="sidebarItemListText">Videos</span>
        </li>

        <li className="sidebarListItem">
        <Groups2 className="sidebarIcon"/>
        <span className="sidebarItemListText">Groups</span>
        </li>

        <li className="sidebarListItem">
        <Bookmarks className="sidebarIcon"/>
        <span className="sidebarItemListText">Bookmarks</span>
        </li>

        <li className="sidebarListItem">
        <Help className="sidebarIcon"/>
        <span className="sidebarItemListText">Questions</span>
        </li>

        <li className="sidebarListItem">
        <WorkOutline className="sidebarIcon"/>
        <span className="sidebarItemListText">Jobs</span>
        </li>

        <li className="sidebarListItem">
        <EventNote className="sidebarIcon"/>
        <span className="sidebarItemListText">Events</span>
        </li>

        <li className="sidebarListItem">
        <School className="sidebarIcon"/>
        <span className="sidebarItemListText">Courses</span>
        </li>

      </ul>
      <button className="sidebarbutton">
      Show More
      </button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
      {Users.map((u) => (
        <CloseFriend key={u.id} user={u} />
      ))}

      
      </ul>
      </div>
    </div>
  )
}

