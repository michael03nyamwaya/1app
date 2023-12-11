import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'




export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
   return(
    <>
    <div className="birthdayContainer">
        <img src="assert/gift.jpg" alt="" className="birthdayImg" />
        <span className="birthdayText">
          {''}
          <b>Ziggy marley</b> and <b>other friends 3 </b> have a birthday Today </span>

      </div>
      <img src="assert/p.jpg" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
      {Users.map(u=>(
      < Online key={u.id} user={u}/>
      ))}
      </ul>
    </>
   )
      }
    const ProfileRightbar=()=>{
      return(
        <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoitem">
            <span className="rightInfoKey">City:</span>
            <span className="rightInfoValue">Nairobi</span>
          </div>
          <div className="rightbarInfoitem">
            <span className="rightInfoKey">From:</span>
            <span className="rightInfoValue">Keroka cbd</span>
          </div>
          <div className="rightbarInfoitem">
            <span className="rightInfoKey">RelationShip:</span>
            <span className="rightInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assert/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tatitana</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assert/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tatitana</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assert/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tatitana</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assert/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tatitana</span>
          </div>
        </div>
        </>
      )
    }
  
  return (
    <div className="rightbar"> 
     <div className="rightbarWrapper">
      <ProfileRightbar/>
     </div>
    </div>
  )
  }
