import { Link, NavLink } from 'react-router-dom';
import './LoginStyle.css';
import Signup from './Signup';

export default function Login() {
    return (
            <div className="login-wrapper">
                <div className="login-titlebox">
                    <div className="login-title">Login form</div>
                </div>
                <div className="login-formbox">
                    {/* <div className="slide-controls">
                        <label  htmlFor="login" className="slide login" onClick={showLogin}>Login</label>
                        <label htmlFor="signup" className="slide signup" onClick={showSignup}>Signup</label>
                    </div> */}
                    <div className="login-forminner">
                        <form action="#" className="login-form">
                            <div className="login-input">
                                <input className="field" type="text" placeholder="@username" required />
                            </div>
                            <div className="login-input">
                                <input className="field" type="text" placeholder="password" required />
                            </div>
                            <div className="password-link"><a href="#">Forgot password?</a></div>
                            <div className="button-box">
                                <Link to='/signup'>Login</Link>
                            </div>
                            <div className="signup-link">Not a member? <a href="#">Signup here</a></div>
                        </form>
                    </div>
                </div>
            </div>
    )
}