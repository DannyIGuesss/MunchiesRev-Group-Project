import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
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
                setUser(res.data.user)
                navigate('/dash')
            } )
            .catch( res => setErrors(res.response.data.errors) )
    }
    return (
        <div>
            <h2>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                {/* first name */}
                {errors.first && <span className="accent">{errors.first.message}</span>}
                <br/>
                <label>
                    First Name:
                    <input type='text' onChange={e=>setFirst(e.target.value)}/>
                </label>
                {/* last name */}
                {errors.last && <span className="accent">{errors.last.message}</span>}
                <br/>
                <label>
                    Last Name:
                    <input type='text' onChange={e=>setLast(e.target.value)}/>
                </label>
                {/* email */}
                {errors.email && <span className="accent">{errors.email.message}</span>}
                <br/>
                <label>
                    Email:
                    <input type='text' onChange={e=>setEmail(e.target.value)}/>
                </label>
                {/* confirm email */}
                {errors.confirmE && <span className="accent">{errors.confirmE.message}</span>}
                <br/>
                <label>
                    Confirm Email:
                    <input type='text' onChange={e=>setConfirmE(e.target.value)}/>
                </label>
                {/* password */}
                {errors.password && <span className="accent">{errors.password.message}</span>}
                <br/>
                <label>
                    Password:
                    <input type='password' onChange={e=>setPassword(e.target.value)}/>
                </label>
                {/* confirm email */}
                {errors.confirmP && <span className="accent">{errors.confirmP.message}</span>}
                <br/>
                <label>
                    Confirm Password:
                    <input type='password' onChange={e=>setConfirmP(e.target.value)}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        </div>
)}

export default Register;