import React from 'react'
import { useNavigate } from 'react-router-dom'


function DeleteBtn({post}) {

  const {id} = post

  function deletePost() {
    fetch(`/posts/${id}`, {
    method: 'DELETE'})
    // .then(res => res.json())
    .then(console.log("Deleted"))
    }

  return (
    <div onClick={deletePost} post={post}>Delete</div>
  )
}

export default DeleteBtn