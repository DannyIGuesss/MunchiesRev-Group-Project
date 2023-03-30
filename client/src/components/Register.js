import React, {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'; // logged feature

import ('../cssFiles/navBar.css')

const Register = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext) // logged feature
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [createdAt] = useState(Date())
    const [updatedAt] = useState(Date())
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('register fomr')
        axios.post('http://localhost:8000/api/register', {
            firstName, lastName, email, confirmEmail, password, confirmPassword, createdAt, updatedAt
        }, { withCredentials: true })
            .then ( res => {
                console.log("logged user" + res.data.user)
                setLoggedUser(res.data.user)
                // setUser(res.data.user)
                navigate('/Restaurants')
            } )
            .catch( res => setErrors(res.response.data.errors) )
    }

    
    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/Login'}>Login</Link></button>
                </div>
            </nav>    
            <h2 className="mx-auto col-10 col-md-8 col-lg-6">
                Register
            </h2>
            <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                <div className="form-group ">
                    {/* first name */}

                    {
                        errors.firstName?
                        <p className='text-danger'>{errors.firstName.message}</p>
                        :
                        null
                    }
                    <br/>
                    <label>First Name:</label>
                    <input className="form-control" type='text' onChange={e=>setFirstName(e.target.value)}/>

                </div>

                <div className="form-group">
                    {/* last name */}
                    {
                        errors.lastName?
                        <p className='text-danger'>{errors.lastName.message}</p>
                        :
                        null
                    }
                    <br/>
                    <label>Last Name:</label>
                    <input className="form-control" type='text' onChange={e=>setLastName(e.target.value)}/>

                </div>
                <div className="form-group">
                    {/* email */}
                    {
                        errors.email?
                        <p className='text-danger'>{errors.email.message}</p>
                        :
                        null
                    }
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    <br/>
                    <label>Email:</label>
                    <input className="form-control" type='text' onChange={e=>setEmail(e.target.value)}/>
                </div>


                <div className="form-group">
                    {/* confirm email */}
                    
                    {/* {errors.email && <span className="text-danger">{errors.email.message}</span>} */}
                    <br/>
                    <label> Confirm Email:</label>
                    <input  className="form-control" type='text' onChange={e=>setConfirmEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    {/* password */}
                    {
                        errors.password?
                        <p className='text-danger'>{errors.password.message}</p>
                        :
                        null
                    }
                    <br/>
                    <label>Password:</label>
                    <input className="form-control" type='password' onChange={e=>setPassword(e.target.value)}/>
                    
                </div>
                <div className="form-group">
                    {/* confirm email */}
                    {/* {errors.password && <span className="text-danger">{errors.password.message}</span>} */}
                    <br/>
                    <label>Confirm Password:</label>
                    <input className="form-control" type='password' onChange={e=>setConfirmPassword(e.target.value)}/>

                </div>
                    <input type='submit' value='Submit'/>
            </form>
        </div>
)}

export default Register;