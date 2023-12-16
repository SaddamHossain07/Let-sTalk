import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share></Share>
                <Post></Post>
            </div>
        </div>
    );
};

export default Feed;