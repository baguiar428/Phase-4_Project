import React from 'react';
import {useNavigate} from "react-router-dom";
import { MdLogin, MdPersonAdd} from "react-icons/md";

function Home() {

  const navigate = useNavigate();

  function login() {
    navigate('/login');
  }

  function signup() {
    navigate('/signup')
  }

  return (
    <>
    <div className='flex'>
      <a onClick={login}><PageIcon icon={<MdLogin size="40"/>}/></a>
      <a onClick={signup}><PageIcon icon={<MdPersonAdd size="40"/>}/></a>
    </div>
    </>
  )
}

const PageIcon = ({ icon }) => <div className='page-icon'>{icon}</div>

export default Home