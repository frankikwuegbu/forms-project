import { Link } from 'react-router-dom';
import './LoginStyle.css';

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
                            <div className="password-link"><Link href="#">Forgot password?</Link></div>
                            <div className="button-box">
                                <Link className='login-button' to='/home'>Login</Link>
                            </div>
                            <div className="signup-link">Not a member? <a href="/signup">Signup here</a></div>
                        </form>
                    </div>
                </div>
            </div>
    )
}