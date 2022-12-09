import React from 'react'


function DeleteBtn({ post, setPostData }) {

  const { id } = post

  async function deletePost() {
    await fetch(`/posts/${id}`, {
      method: 'DELETE'
    })
    await fetch('/posts')
      .then(resp => resp.json())
      .then(resp => setPostData(resp))
  }

  return (
    <div onClick={deletePost} post={post}>Delete</div>
  )

}

export default DeleteBtn