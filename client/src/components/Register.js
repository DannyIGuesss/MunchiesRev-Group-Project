import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'import {Link} from 'react-router-dom'
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
                setUser(res.data.user)
                navigate('/dash')
            } )
            .catch( res => setErrors(res.response.data.errors) )
    }
    return (
        <div>
        
        </div>
)}

export default Register;