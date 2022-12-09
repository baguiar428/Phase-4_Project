import React from 'react'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'

function Post({post, setPostData}) {

  const {id, description, flair_id, user_id, created_at, updated_at} = post 
  
  let editBtn
  let deleteBtn
  
  if(parseInt(sessionStorage.getItem("user_id"), 10) === user_id){
    editBtn = <EditBtn post={post} setPostData={setPostData}/>
    deleteBtn = <DeleteBtn post={post} setPostData={setPostData}/>
  }

    return (
    <div className='grid place-items-center border-solid border-2 border-sky-500 m-2 p-2'>
    <div>Post {id}</div>
    <h3>{description}</h3>
    <h3>flair_id {flair_id}</h3>
    <h3>user_id {user_id}</h3>
    <h3>created_at {created_at}</h3>
    <h3>updated_at {updated_at}</h3>
    {editBtn}
    {deleteBtn}
    </div>
  )
}

export default Post