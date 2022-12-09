import React from "react";
import { useNavigate } from "react-router-dom";


function NavBar({ isLoggedIn }) {

    const navigate = useNavigate();

    function login() {
        navigate('/login');
    }

    function signup() {
        navigate('/signup')
    }


    function handleLogout(){
        fetch('/logout', {
          method: 'DELETE'
        })
        .then(() => sessionStorage.clear())
    
        navigate('/logout')
    
      }
    
    const signupHome = <button className='font-squids m-4 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={signup}>Sign-Up</button>

    const isLoggedInHome = sessionStorage.getItem("user_id") ? 
    <button className='font-squids m-4 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={handleLogout}>Logout</button>
    : <button className='font-squids m-4 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={login}>Login</button>

    return (
        <div>
            <div className="flex justify-end ">
                <h1 className="font-squids text-8xl text-green-500 flex-auto">/Dev/Null</h1>
                {isLoggedInHome}
            </div>
        </div>
    )
}

export default NavBar