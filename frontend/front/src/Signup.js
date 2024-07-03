import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import validation from './validations/SignupValidation';

export default function Signup() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.password === "" && errors.confirmPassword === "") {
            axios.post('http://localhost:5000/auth/register', values)
                .then(res => {
                    navigate('/');
                    console.log(res);
                })
                .catch(err => {
                    setErrors(prev => ({ ...prev, "create": err.response.data.error }));
                    console.log(errors.create);
                });
        }
    };

    return (
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
                    <form action="#" className="login-form" onSubmit={handleSubmit}>
                        <div className="login-input">
                            <input className="field" type="text" placeholder="@username" required
                                onChange={handleInput} name='username' />
                        </div>
                        <div className="login-input">
                            <input className="field" type="text" placeholder="password" required
                                onChange={handleInput} name='password' />
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className="login-input">
                            <input className="field" type="text" placeholder="confirm password" required
                                onChange={handleInput} name='confirmPassword' />
                            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                        </div>
                        {errors.create && <span>{errors.create}</span>}
                        {/* <div className="button-box">
                                <Link className='login-button' to='/'>Signup</Link>
                            </div> */}
                        <button type='submit' className=''>Signup</button>
                        <div className="signup-link">Already a member? <a href="/">Login here</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}