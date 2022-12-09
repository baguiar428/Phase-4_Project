import React from "react";
import {useNavigate} from "react-router-dom";


function NavBar() {

    const navigate = useNavigate();

    function login() {
        navigate('/login');
      }

      function signup() {
        navigate('/signup')
      }
    return (
        <div>
        <div className="flex justify-end">
            <button className='font-squids m-4 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={login}>Login</button>
            <button className='font-squids m-4 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={signup}>Sign-Up</button>
        </div>
        </div>
    )
}

export default NavBar