import React, {useState} from 'react'

function Signup() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        confirmEmail: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const signup = {
            ...formData
        }
        console.log(signup)

        //need to post the signup to users route
        //if the response is okay then you can push to the homescreen 
        //otherwise we through errors
    }




   
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Enter Username
        </label>
        <input type='text' name='username' value={formData.username} onChange={handleChange}/>

        <label>
            Enter Email
        </label>
        <input type='text' name='email' value={formData.email} onChange={handleChange}/>

        <label>
            Confirm Email
        </label>
        <input type='text' name='confirmEmail' value={formData.confirmEmail} onChange={handleChange}/>

        <label>
            Enter Password
        </label>
        <input type='text' name='password' value={formData.password} onChange={handleChange}/>

        <input type='submit' value='Signup' />

    </form>
    </>
  )
}

export default Signup