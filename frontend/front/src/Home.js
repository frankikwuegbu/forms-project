import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const Logout = () => {
        axios.get('http://localhost:5000/auth/logout')
            .then(res => {
                alert("logout successful")
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>UNDER CONSTRUCTION...</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}