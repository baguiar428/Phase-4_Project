import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login({handleLogin}) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

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
        .then(resp => resp.json())
        .then(login => {
            console.log(login)
            sessionStorage.setItem("user_id", login.id)   
            navigate("/")
        })

       

        //need to make a backend login route and make a post request to it
        //then if the response is okay we can push the user to the home page
        //otherwise we through errors
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="grid place-items-center overflow-hidden grid-cols-none grid-rows-4 gap-4 pt-20">
        <label className="text-green-400">
            Enter Username
        </label>
        <input type='text' name='username' value={formData.username} onChange={handleChange}/>

        <label className="text-green-400">
            Enter Password
        </label>
        <input type='text' name='password' value={formData.password} onChange={handleChange}/>

        <input type='submit' value='Login' />

    </form>
    </>
  )
}

export default Login