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

    const [errors, setErrors] = useState([])
    // const [misMatch, setMisMatch] = useState("")

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
        .then(resp => {
            if(resp.ok){
                resp.json().then(user =>{
                    sessionStorage.setItem("user_id", user.id)
                    setErrors([])
                    navigate("/")})
            } else{
                resp.json().then(data => {
                    console.log("data:", data)
                    setErrors(data.errors)})

            }
           
    })}else{
        // setMisMatch("Passwords do not match")
        alert("Passwords do not match")
    }

    e.target.reset()
}

console.log(errors)
const displayErrors = errors.map(error => <div key={error}> error: {error} </div>)
console.log(displayErrors)

   
  return (
    <>
    {/* {errors ? ( errors.map(error => <div>{error}</div>)):  */}
    <form onSubmit={handleSubmit} className='grid place-items-center overflow-hidden grid-cols-none grid-rows-7 gap-4 pt-20"'>
        <label className="text-green-400 font-squids">
            Enter Username
        </label>
        <input type='text' name='username' value={formData.username} onChange={handleChange}/>

        <label className="text-green-400 font-squids">
            Enter Password
        </label>
        <input type='password' name='password' value={formData.password} onChange={handleChange}/>

        <label className="text-green-400 font-squids">
            Confirm Password
        </label>
        <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>

        <input className="font-squids m-4 p-2 rounded-lg bg-red-500 hover:bg-green-500" type='submit' value='Sign-up' />

        {errors ? displayErrors : null}
        {/* {misMatch} */}
    </form>
    </>
  )
}

export default Signup