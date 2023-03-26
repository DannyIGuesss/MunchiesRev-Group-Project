import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

import ('../cssFiles/navBar.css')

const Register = (props) => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [confirmE, setConfirmE] = useState("")
    const [password, setPassword] = useState("")
    const [confirmP, setConfirmP] = useState("")
    const [createdAt] = useState(Date())
    const [updatedAt] = useState(Date())
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('register fomr')
        axios.post('http://localhost:8000/api/register', {
            first, last, email, confirmE, password, confirmP, createdAt, updatedAt      
        }, { withCredentials: true })
            .then ( res => {
                console.log("logged user" + res.data.user)
                // setUser(res.data.user)
                navigate('/dash')
            } )
            .catch( res => setErrors(res.response.data.errors) )
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
            <h2 class="mx-auto col-10 col-md-8 col-lg-6">
                Register
            </h2>
            <form class="mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                <div class="form-group ">
                    {/* first name */}
                    {errors.first && <span className="accent">{errors.first.message}</span>}
                    <br/>
                    <label>First Name:</label>
                    <input class="form-control" type='text' onChange={e=>setFirst(e.target.value)}/>
                </div>
                <div class="form-group">
                    {/* last name */}
                    {errors.last && <span className="accent">{errors.last.message}</span>}
                    <br/>
                    <label>Last Name:</label>
                    <input class="form-control" type='text' onChange={e=>setLast(e.target.value)}/>
                </div>
                <div class="form-group">
                    {/* email */}
                    {errors.email && <span className="accent">{errors.email.message}</span>}
                    <br/>
                    <label>Email:</label>
                    <input class="form-control" type='text' onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div class="form-group">
                    {/* confirm email */}
                    {errors.confirmE && <span className="accent">{errors.confirmE.message}</span>}
                    <br/>
                    <label> Confirm Email:</label>
                    <input  class="form-control" type='text' onChange={e=>setConfirmE(e.target.value)}/>
                    
                </div>
                <div class="form-group">
                    {/* password */}
                    {errors.password && <span className="accent">{errors.password.message}</span>}
                    <br/>
                    <label>Password:</label>
                    <input class="form-control" type='password' onChange={e=>setPassword(e.target.value)}/>
                    
                </div>
                <div class="form-group">
                    {/* confirm email */}
                    {errors.confirmP && <span className="accent">{errors.confirmP.message}</span>}
                    <br/>
                    <label>Confirm Password:</label>
                    <input class="form-control" type='password' onChange={e=>setConfirmP(e.target.value)}/>
                    
                </div>
                    <input type='submit' value='Submit'/>
            </form>
        </div>
)}

export default Register;