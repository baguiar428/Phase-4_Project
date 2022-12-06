import React from 'react';
import {useNavigate} from "react-router-dom";
import { MdLogin } from "react-icons/md";

function Home() {

  const navigate = useNavigate();

  function login() {
    navigate('/login');
  }

  return (
    <>
    <div className='flex'>
      <div onClick={login} className="flex-1">
        <PageIcon icon={<MdLogin size="140"/>}/>
      </div>
    </div>
    </>
  )
}

const PageIcon = ({ icon }) => <div className='page-icon'>{icon}</div>

export default Home