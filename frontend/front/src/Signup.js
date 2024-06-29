import { Link } from 'react-router-dom';

export default function Signup() {
    return(
        <div className="login-wrapper">
                <div className="login-titlebox">
                    <div className="login-title">Signup form</div>
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
                            <div className="login-input">
                                <input className="field" type="text" placeholder="confirm password" required />
                            </div>
                            <div className="button-box">
                                <Link className='login-button' to='/'>Signup</Link>
                            </div>
                            <div className="signup-link">Already a member? <a href="/">Login here</a></div>
                        </form>
                    </div>
                </div>
        </div>
    )
}