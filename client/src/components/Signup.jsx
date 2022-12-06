import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
        // email: '',
        // confirmEmail: ''
    })

    const navigate = useNavigate()

    function handleChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const signup = {
            ...formData
        }
        if(formData.password === formData.confirmPassword){
        fetch('/users',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signup)
        })
        .then(resp => resp.json())
        .then(user =>{
            sessionStorage.setItem("user_id", user.id)
            navigate("/")
        })
    }else{
        alert("Passwords do not match")
    }

    e.target.reset()
}




   
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Enter Username
        </label>
        <input type='text' name='username' value={formData.username} onChange={handleChange}/>

        {/* <label>
            Enter Email
        </label>
        <input type='text' name='email' value={formData.email} onChange={handleChange}/>

        <label>
            Confirm Email
        </label>
        <input type='text' name='confirmEmail' value={formData.confirmEmail} onChange={handleChange}/> */}

        <label>
            Enter Password
        </label>
        <input type='text' name='password' value={formData.password} onChange={handleChange}/>

        <label>
            Confirm Password
        </label>
        <input type='text' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>

        <input type='submit' value='Signup' />

    </form>
    </>
  )
}

export default Signup