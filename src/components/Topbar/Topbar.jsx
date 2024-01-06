import './Topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import photo from '../../assets/Saddam.jpg'
import { Link } from 'react-router-dom';
import { BsChatHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to={'/'}>
                    <BsChatHeartFill className='logo' />
                </Link>
                <div className="searchbar">
                    <SearchIcon className='searchIcon' />
                    <input type="text" className='searchInput' placeholder="search Let's Talk" />
                </div>

            </div>
            <div className="topbarCenter">
                <div className='topbarCenterIcons'>
                    <AiFillHome className='active' />
                    <MdVideoLibrary />
                    <FaShop />
                    <IoGameController />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon className='topbarIcon' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon className='topbarIcon' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon className='topbarIcon' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <Link to='/profile'>
                        <img src={photo} alt="" className="topbarImage" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topbar;