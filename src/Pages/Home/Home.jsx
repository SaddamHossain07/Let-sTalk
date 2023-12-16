import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css'

const Home = () => {
    return (
        <>
            <Topbar></Topbar>
            <div className="homeContainer">
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </div>
        </>
    );
};

export default Home;