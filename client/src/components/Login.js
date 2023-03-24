import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = ({setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{ email, password}, { withCredentials: true })
            .then ( res => {
                console.log('user', res.data.user);
                setUser(res.data.user)//sets the user globally so other sites will have information of your account 
                navigate("/Restaurants");//sends you back to the restaurant site
            })
            .catch( err => {console.log(err.response.data); setErrors(err.response.data.errors)} )
    }
    return (
        <div className='max-content'>
            <h2>
                Login
            </h2>
            {errors && <span className='accent'>{errors}</span>}
            <form onSubmit = {handleSubmit}>
                {/* email */}
                <label>
                    Email:
                    <input type='text' onChange={ e => setEmail(e.target.value) }/>
                </label>
                {/* password */}
                <label>
                    Password:
                    <input type='password' onChange={ e => setPassword(e.target.value) } />
                </label>
                <input class= 'glow-on-hover' type='submit' value='Submit'/>
            </form>
        </div>
)}

export default Login;