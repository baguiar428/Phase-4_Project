import React from 'react'
import {useNavigate} from "react-router-dom";
import {MdHome} from "react-icons/md";

function LoggedOutScreen() {
    const navigate = useNavigate();

    function GoHome(){
        navigate('/')
    }

  return (
    <>
    <div className='font-squids text-4xl grid place-items-center'>Successfully Logged Out</div>
    <a className='grid place-items-center' onClick={GoHome}><PageIcon icon={<MdHome size="40"/>}/></a>
    </>
  )
}

const PageIcon = ({ icon }) => <div className='page-icon'>{icon}</div>

export default LoggedOutScreen