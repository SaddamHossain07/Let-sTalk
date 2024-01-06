import './Rightbar.css';
import giftImg from '../../assets/bGift.jpeg'
import adImg from '../../assets/1615304976.jpg'
import onlineFrn from '../../assets/4.avif'
import followingImg1 from '../../assets/1.avif'
import followingImg2 from '../../assets/2.avif'
import followingImg3 from '../../assets/3.avif'
import followingImg4 from '../../assets/4.avif'
import followingImg5 from '../../assets/5.avif'
import followingImg6 from '../../assets/Saddam.jpg'

const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={giftImg} alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Pola foster</b> and <b>3 other friends</b> have birthday today!</span>
                </div>

                <img src={adImg} alt="" className="rightbarAd" />

                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileContainer">
                            <img className='rightbarProfileImg' src={onlineFrn} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileContainer">
                            <img className='rightbarProfileImg' src={onlineFrn} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileContainer">
                            <img className='rightbarProfileImg' src={onlineFrn} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileContainer">
                            <img className='rightbarProfileImg' src={onlineFrn} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City :</span>
                        <span className="rightbarInfoValue">New Yourk</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From :</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship :</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className='followingImg' src={followingImg1} alt="" />
                        <span className='followingName'>John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='followingImg' src={followingImg2} alt="" />
                        <span className='followingName'>John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='followingImg' src={followingImg3} alt="" />
                        <span className='followingName'>John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='followingImg' src={followingImg4} alt="" />
                        <span className='followingName'>John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='followingImg' src={followingImg5} alt="" />
                        <span className='followingName'>John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='followingImg' src={followingImg6} alt="" />
                        <span className='followingName'>John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}

            </div>
        </div>
    );
};

export default Rightbar;