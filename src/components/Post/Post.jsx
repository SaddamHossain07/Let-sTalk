import './Post.css'
import postImage from '../../assets/3.avif'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { Margin } from '@mui/icons-material';

const Post = ({ post }) => {
    const { textContent, image, date, like, comment, userId } = post
    const [author, setAuthor] = useState([])
    const [newLike, setNewLike] = useState(like)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        fetch('/user.json')
            .then(res => res.json())
            .then(data => {
                const author = data.filter(user => user.id == userId)
                setAuthor(author[0])
            })
    }, [userId])

    const handleLike = () => {
        console.log('liked clicked');
        setNewLike(isLiked ? newLike - 1 : newLike + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postAuthorProfileImage' src={author.photoUrl} alt="" />
                        <span className="postAuthorName">{author.displayName}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postContent">
                    <span className="postText">{textContent}</span>
                    <img src={image} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        {
                            isLiked ? <ThumbUpIcon onClick={handleLike} className='likeIcon' /> : <ThumbUpIcon onClick={handleLike} />
                        }

                        <FavoriteIcon className='favoriteIcon' />
                        <span className="likeCounter">{newLike} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;