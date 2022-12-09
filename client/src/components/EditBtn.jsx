import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditBtn({post, setPostData}) {
  const navigate = useNavigate()
  
  function edit(){
    // console.log(post)
    navigate('/edit-post', {state: {post: post}})
  }

  return (
    <>
    {console.log(post)}
    {/* <div onClick={edit} post={post} >EditBtn</div> */}
    <button className='font-squids m-1 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={edit} post={post}>Edit</button>
    </>
  )
}

export default EditBtn