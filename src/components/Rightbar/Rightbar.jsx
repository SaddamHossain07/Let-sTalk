import './Rightbar.css';
import giftImg from '../../assets/bGift.jpeg'
import adImg from '../../assets/1615304976.jpg'
import onlineFrn from '../../assets/4.avif'
const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
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

            </div>
        </div>
    );
};

export default Rightbar;