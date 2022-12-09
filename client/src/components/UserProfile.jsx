import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
// import PostContainer from './PostContainer'
import Post from './Post'
import { MdHomeFilled } from "react-icons/md"

function UserProfile() {
  const currentUser = parseInt(sessionStorage.getItem("user_id"))
  const [userPosts, setUserPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/users/${currentUser}/posts`)
  .then(resp => resp.json())
  .then(posts => setUserPosts(posts))}, [])

  function goHome(){
    navigate("/")
  } 


  const displayUserPosts = userPosts.map(post => <Post key={post.id} post={post}/>)
  


  return (
    <div>
      <a onClick={goHome}><PageIcon icon={<MdHomeFilled size="40"/>}/></a>
      {displayUserPosts}
    </div>
  )
}
const PageIcon = ({ icon }) => <div className='page-icon'>{icon}</div>

export default UserProfile