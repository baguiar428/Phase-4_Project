import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { MdLogin, MdLogout, MdCreate, MdPerson } from "react-icons/md";
import PostContainer from "./PostContainer"

function Home({posts, setPostData}) {

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

  function userProfile(){
    navigate('my-profile')
  }

  function createPost(){
  if(sessionStorage.getItem("user_id")){
    navigate('/create-post')
  }else{
    navigate('/login')
  }
  }

  const isLoggedIn = sessionStorage.getItem("user_id") ? 
  <a onClick={handleLogout}><PageIcon icon={<MdLogout size="40"/>}/></a> :
  <a onClick={login}><PageIcon icon={<MdLogin size="40"/>}/></a>

  // const canCreatePost = sessionStorage.getItem("user_id") ?
  
  

  return (
    <>
    <div className='flex'>
      {isLoggedIn}
      <a onClick={createPost}><PageIcon icon={<MdCreate size="40"/>}/></a>
      <a onClick={userProfile}><PageIcon icon={<MdPerson size="40"/>}/></a>
    </div>
    
    <PostContainer posts={posts} setPostData={setPostData}/>

    </>
  )
}

const PageIcon = ({ icon }) => <div className='page-icon'>{icon}</div>

export default Home