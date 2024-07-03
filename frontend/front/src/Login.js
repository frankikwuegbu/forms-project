import { Link, useNavigate } from 'react-router-dom';
import './LoginStyle.css';
import { useState } from 'react';
import validation from './validations/LoginValidation';
import axios from 'axios';

export default function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.password === "") {
            axios.post('http://localhost:5000/auth/login', values)
                .then(res => {
                    navigate('/home');
                    console.log(res);
                })
                .catch(err => {
                    setErrors(prev => ({ ...prev, "loginAttempt": err.response.data.error }));
                    console.log(errors.create);
                });
        }
    };

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
                    <form action="#" className="login-form" onSubmit={handleSubmit}>
                        <div className="login-input">
                            <input className="field" type="text" placeholder="@username" required
                                onChange={handleInput} name='username' />
                        </div>
                        <div className="login-input">
                            <input className="field" type="text" placeholder="password" required
                                onChange={handleInput} name='password' />
                        </div>
                        {errors.password && <span>{errors.password}</span>}
                        {errors.loginAttempt && <span>{errors.loginAttempt}</span>}
                        <div className="password-link"><Link href="#">Forgot password?</Link></div>
                        {/* <div className="button-box">
                                <Link className='login-button' to='/home'>Login</Link>
                            </div> */}
                        <button type='submit' className=''>Login</button>
                        <div className="signup-link">Not a member? <a href="/signup">Signup here</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}