import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { MdLogin, MdPersonAdd, MdLogout} from "react-icons/md";
import PostContainer from "./PostContainer"

function Home({posts}) {

  const [postsArray, setPostsArray] = useState([]);


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

  const isLoggedIn = sessionStorage.getItem("user_id") ? 
  <a onClick={handleLogout}><PageIcon icon={<MdLogout size="40"/>}/></a> :
  <a onClick={login}><PageIcon icon={<MdLogin size="40"/>}/></a>

  return (
    <>
    <div className='flex'>
      {isLoggedIn}
      <a onClick={signup}><PageIcon icon={<MdPersonAdd size="40"/>}/></a>
    </div>
    
    <PostContainer posts={posts} changePosts={setPostsArray}/>

    </>
  )
}

const PageIcon = ({ icon }) => <div className='page-icon'>{icon}</div>

export default Home