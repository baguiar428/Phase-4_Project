import React from 'react'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'

function Post({post}) {

  const {id, description, flair_id, user_id, created_at, updated_at} = post 
  
  let editBtn
  let deleteBtn
  
  if(parseInt(sessionStorage.getItem("user_id"), 10) === user_id){
    editBtn = <EditBtn post={post}/>
    deleteBtn = <DeleteBtn post={post}/>
  }

    return (
    <>
    <div>Post {id}</div>
    <h3>{description}</h3>
    <h3>flair_id {flair_id}</h3>
    <h3>user_id {user_id}</h3>
    <h3>created_at {created_at}</h3>
    <h3>updated_at {updated_at}</h3>
    {editBtn}
    {deleteBtn}
    <h3>--------------------------------</h3>

    </>
  )
}

export default Post