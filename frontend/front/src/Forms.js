import './Forms.css';
// import Signup from './Signup';
import { showSignup, showLogin } from './BtnControl'
// import Login from './Login';
export default function Forms() {

    return(
        <>
            <div className="wrapper">
                <div className="title-box">
                    <div className="login title">Login form</div>
                    <div className="signup title">Signup form</div>
                </div>
                <div className="form-box">
                    <div className="slide-controls">
                        <input type="radio" name="slider" id="login" defaultChecked/>
                        <input type="radio" name="slider" id="signup"/>
                        <label  htmlFor="login" className="slide login" onClick={showLogin}>Login</label>
                        <label htmlFor="signup" className="slide signup" onClick={showSignup}>Signup</label>
                        <div className="slide-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form action="#" className="login">
                            <div className="input">
                                <input className="field" type="text" placeholder="@username" required />
                            </div>
                            <div className="input">
                                <input className="field" type="text" placeholder="password" required />
                            </div>
                            <div className="password-link"><a href="#">Forgot password?</a></div>
                            <div className="input">
                                <input type="submit" value="Login" className="button" />
                            </div>
                            <div className="signup-link">Not a member? <a href="#">Signup here</a></div>
                        </form>
                        <form action="#" className="signup">
                            <div className="input">
                                <input className="field" type="text" placeholder="@username" required />
                            </div>
                            <div className="input">
                                <input className="field" type="text" placeholder="password" required />
                            </div>
                            <div className="input">
                                <input className="field" type="text" placeholder="confirm password" required />
                            </div>
                            <div className="password-link"><a href="#">Forgot password?</a></div>
                            <div className="input">
                                <input type="submit" value="Signup" className="button" />
                            </div>
                            <div className="signup-link">Not a member? <a href="#">Signup here</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}