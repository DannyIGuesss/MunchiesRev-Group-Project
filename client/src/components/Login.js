import React, {useContext, useState} from 'react'; // 'useContext' logged feature
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'; // logged feature
import ('../cssFiles/Login.css')
import ('../cssFiles/navBar.css')


const Login = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext) // logged feature
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{email, password}, { withCredentials: true })
            .then ( res => {
                console.log('user', res.data.user);
                setLoggedUser(res.data.user)//sets the user globally so other sites will have information of your account 
                navigate("/Restaurants");//sends you back to the restaurant site
            })
            .catch( err => {
                setErrors(err.response.data);
            })
    }


    return (
        <div>
        <nav>
            <h1>MunchiesRev</h1>
            <div className='nav-btn'>
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/register'}>Register</Link></button>
            </div>
        </nav>

        {/* MAIN CONTENT  */}
        <div id='center'>    
            <div id="login-container" className=''>

                {/* LEFT SIDE */}
                <div id="left-login"></div>

                {/* RIGHT SIDE */}
                <div id="right-login">
                    <div id="right-inside" className=''>
                        <h2>Welcome back!</h2>

                            {
                                errors.message?
                                <p className='text-danger'>{errors.message}</p>
                                :
                                null
                            }

                        <form id="form" className="col-10 col-md-8 col-lg-6" onSubmit = {handleSubmit}>
                            <div id="form-input" className="form-group">
                                {/* email */}
                                <label >Email:</label>
                                <input className="form-control" type='text' placeholder="Type Email" onChange={ e => setEmail(e.target.value) }/>
                                
                            </div>
                            <div id="form-input" className="form-group mt-3">
                                {/* password */}
                                <label>Password:</label>
                                <input className="form-control" type='password' placeholder='Password' onChange={ e => setPassword(e.target.value) } />
                            </div>
                            <button className= 'btn btn-secondary btn-sm mt-3' type='submit'>Submit</button>
                        </form> 
                    </div>
                </div>  
            </div>
        </div>
        </div>
)}

export default Login;