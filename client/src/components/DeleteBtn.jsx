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
    // <div onClick={deletePost} post={post}>Delete</div>
    <button className='font-squids m-1 p-2 rounded-lg bg-red-500 hover:bg-green-500' onClick={deletePost} post={post}>Delete</button>
  )

}

export default DeleteBtn