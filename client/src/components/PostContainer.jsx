import React, { useState } from 'react'
import { useEffect } from 'react'
import Post from './Post'

function PostContainer({posts, setPostData}) {

  // const [description, flair_id, user_id, created_at, updated_at] = posts

  const eachPost = posts.map(post => <Post key={post.id} post={post} setPostData={setPostData} />)

//Experimental
// useEffect(()=>{
//   fetch('/posts')
//   .then(res => res.json())
// },[posts])



  return (
    <div>PostContainer
      {eachPost}
    </div>
  )
}

export default PostContainer