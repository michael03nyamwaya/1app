import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
<>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="assert/p5.jpg" alt="" className="profileCoverImg" />
                <img src="assert/p3.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">BookerLee</h4>
                  <span className="profileInfoDesc">Hello Buddies</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
            </div>
        </div>
       
        </div>
        
    </>
  )
}
