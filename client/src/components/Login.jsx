import React, {useState} from 'react'

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

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
        console.log(login)

        //need to make a backend login route and make a post request to it
        //then if the response is okay we can push the user to the home page
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
            Enter Password
        </label>
        <input type='text' name='password' value={formData.password} onChange={handleChange}/>

        <input type='submit' value='Login' />

    </form>
    </>
  )
}

export default Login