import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setErrors] = useState([])
    const navigate = useNavigate();

    function handleChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    // console.log(formData)

    

    function handleSubmit(e){
        e.preventDefault()
        const login = {
            ...formData
        }
        // console.log(login)

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        .then(resp =>{
            if (resp.ok){
                resp.json().then(user =>{
                    sessionStorage.setItem("user_id", user.id)
                    setErrors([])
                    navigate("/")})
                }else{
                    resp.json().then(data => {
                        //data returns an object with an error key
                        //that error key has an object with a login
                        //key. That login key has the error string
                        console.log("data:", data)
                        console.log("data:", data.error)
                        console.log("data:", data.error.login)
                        setErrors(data.error.login)})
                }
            }
        )
    }

// const displayErrors = errors.map(error => <div key={error}> error: {error} </div>)

function goToSignup(){
    navigate('/signup')
}



  return (
    <>
    <form onSubmit={handleSubmit} className="grid place-items-center overflow-hidden grid-cols-none grid-rows-4 gap-4 pt-20">
        <label className="text-green-400 font-squids">
            Enter Username
        </label>
        <input type='text' name='username' value={formData.username} onChange={handleChange}/>

        <label className="text-green-400 font-squids">
            Enter Password
        </label>
        <input type='text' name='password' value={formData.password} onChange={handleChange}/>

        <input className="font-squids" type='submit' value='Login' />

        {error ? error : null}

        <a onClick={goToSignup}>Signup</a>


    </form>
    </>
  )
}


export default Login