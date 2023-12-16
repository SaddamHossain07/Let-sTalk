import './Share.css'
import shareImage from '../../assets/Saddam.jpg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={shareImage} alt="" className='shareProfileImage' />
                    <input type="text" placeholder="what's on your mind" className='shareInput' />
                </div>

                <hr className="shareHr" />

                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='tomato' className='shareOptionIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareOptionIcon' />
                            <span className='shareOptionText'>Tags</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor='green' className='shareOptionIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareOptionIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>

                    <button className='shareBtn'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;