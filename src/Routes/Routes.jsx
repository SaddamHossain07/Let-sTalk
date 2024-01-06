import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: 'profile',
        element: <Profile></Profile>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default Routes;