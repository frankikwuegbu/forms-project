import './Forms.css';
export default function Forms() {
    return(
        <body>
            <div className="wrapper">
                <div className="title-box">
                    <div className="login title">Login form</div>
                    <div className="signup title">Signup form</div>
                </div>
                <div className="form-box">
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
                    </div>
                </div>
            </div>
        </body>
    )
}