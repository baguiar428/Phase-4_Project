import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditBtn({post}) {
  const navigate = useNavigate()
  
  function edit(){
    // console.log(post)
    navigate('/edit-post')
  }

  return (
    <>
    {console.log(post)}
    <div onClick={edit} post={post} >EditBtn</div>
    </>
  )
}

export default EditBtn