import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonIcon from '@mui/icons-material/Person';



export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">MikeSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <SearchIcon  className='searchIcon'/>
                <input type='text'placeholder='search form' className='searchInput'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Title</span>
            </div>
            <div className="topbarIcons">
               <div className="topbarIconItem">
               <PersonIcon/>
               <span className="topbarIconBadge">1</span>
               </div>
               <div className="topbarIconItem">
               <ChatIcon/>
               <span className="topbarIconBadge">2</span>
               </div>
               <div className="topbarIconItem">
               <CircleNotificationsIcon/>
               <span className="topbarIconBadge">1</span>
               </div>
            </div>
            <img src="assert/p1.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
