import React, {useContext, useState} from 'react'; // 'useContext' logged feature
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'; // logged feature



const Login = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext) // logged feature
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{ email, password}, { withCredentials: true })
            .then ( res => {
                console.log('user', res.data.user);
                setLoggedUser(res.data.user)//sets the user globally so other sites will have information of your account 
                navigate("/Restaurants");//sends you back to the restaurant site
            })
            .catch( err => {console.log(err.response.data); setErrors(err.response.data.errors)} )
    }
    return (
        <div className='max-content'>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/register'}>Register</Link></button>
                </div>
            </nav>
            <h2 className="mx-auto col-10 col-md-8 col-lg-6">

                Login
            </h2>
            {
                errors?
                <p className='text-danger'>{errors}</p>
                :
                null
            }
            {/* {errors && <span className='accent'>{errors}</span>} */}
            <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit = {handleSubmit}>
                <div className="form-group ">
                    {/* email */}
                    <label >Email:</label>
                    <input className="form-control" type='text' onChange={ e => setEmail(e.target.value) }/>
                    
                </div>
                <div className="form-group ">
                    {/* password */}
                    <label>Password:</label>
                    <input className="form-control" type='password' onChange={ e => setPassword(e.target.value) } />
                </div>
                <input className= 'glow-on-hover' type='submit' value='Submit'/>
            </form>
        </div>
)}

export default Login;