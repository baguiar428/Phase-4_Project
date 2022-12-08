import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function CreatePost() {

  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    description: '',
    flair_id: ''  
  })

  const [postErrors, setPostErrors] = useState([])

  function handleChange(e) {
    const {name, value} = e.target
    setPostData({...postData, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    const post = {
      ...postData
    }

    fetch('/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    .then(res =>)


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Description</label>
      <input 
        type='text' name='description' 
        value={postData.description} 
        onChange={handleChange}/>
      
    </form>
    </>
  )
}

export default CreatePost