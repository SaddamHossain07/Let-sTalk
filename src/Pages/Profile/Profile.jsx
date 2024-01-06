
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Profile.css'
import Rightbar from '../../components/Rightbar/Rightbar';
import Feed from '../../components/Feed/Feed';
import coverImg from '../../assets/cover.jpg'
import userImg from '../../assets/Saddam.jpg'

const Profile = () => {
    return (
        <>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={coverImg} alt="" />
                            <img className='profileUserImg' src={userImg} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Saddam Hossain</h4>
                            <span className='profileInfoDesc'>front-end web developer</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <Rightbar profile></Rightbar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;