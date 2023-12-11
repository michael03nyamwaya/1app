import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'
import { useState } from 'react';

export default function Post({post}) {
    const[like ,setLike]=useState(post.like)
    const[isLiked ,setisLiked]=useState(false)

    const likeHandler=()=>{
        setLike(isLiked ? like-1 :like +1)
        setisLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src=
                    {Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                    <span className="postDate">{post.date}</span>
                    
                </div>
                <div className="postTopRight"></div>
                <MoreVertIcon/>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assert/f1.jpg" onClick={likeHandler} alt="" className="postlikeIcon" />
                    <img src="assert/l.jpg" onClick={likeHandler} alt="" className="postlikeIcon" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
