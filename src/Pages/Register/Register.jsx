import './Register.css'

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Let's Talk</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Let's Talk</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder='Username' className="loginInput" />
                        <input type="text" placeholder='Email' className="loginInput" />
                        <input type="password" placeholder='Password' className="loginInput" />
                        <input type="password" placeholder='Confirm Password' className="loginInput" />
                        <button className="loginBtn">Login</button>
                        <button className="loginRegisterBtn">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;