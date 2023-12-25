import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';

const Feed = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('/post.json')
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, [])
    console.log(post)
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share></Share>
                {
                    post?.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Feed;