import './sidebar.css'
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReportIcon from '@mui/icons-material/Report';
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="siderbarList">
            <li className="sidebarListItem">
                <RssFeedIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <ChatBubbleOutlineIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleOutlineIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
                <GroupIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Groups</span>
            </li>
            
            <li className="sidebarListItem">
                <HelpOutlineIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                <BookmarkIcon  className='sidebarIcon'/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutlineIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Jobs</span>
            </li>
            
            <li className="sidebarListItem">
                <ReportIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                <SchoolIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
           {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
           ))}
        </ul>
      </div>
    </div>
  )
}
