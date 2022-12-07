import React from 'react'
import {useNavigate} from "react-router-dom";

function LoggedOutScreen() {
    const navigate = useNavigate();

    function GoHome(){
        navigate('/')
    }

  return (
    <>
    <div>Successfully Logged Out</div>
    <a onClick={GoHome}>Return to Home</a>
    </>
  )
}

export default LoggedOutScreen