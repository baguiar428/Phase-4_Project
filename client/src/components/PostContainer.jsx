import React from 'react'
import Post from './Post'

function PostContainer({posts}) {

  // const [description, flair_id, user_id, created_at, updated_at] = posts

  const eachPost = posts.map(post => <Post key={post.id} post={post} />)
  



  return (
    <div>PostContainer
      {eachPost}
    </div>
  )
}

export default PostContainer