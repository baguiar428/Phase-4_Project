import React, {useState} from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function CreatePost({postData, setPostData}) {

  const currentUser = sessionStorage.getItem("user_id")

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: '',
    flair_id: '' ,
    user_id: currentUser
  })

  const [flairs, setFlairs] = useState([])

  const [postErrors, setPostErrors] = useState([])

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSelectChange(e){
    setFormData({...formData, flair_id: e.target.value})
  }
  

  async function handleSubmit(e){
    e.preventDefault()
    const post = {
      ...formData
    }

    await fetch('/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    .then(res =>{
      if(res.ok){
        // setPostData([...postData, post])
        // res.json().then(navigate('/'))
        console.log("Post Added")
      }else{
        res.json().then(data => {
          console.log("Errors: ", data)
        })
      }
    })

    await fetch('/posts')
    .then(resp => resp.json())
    .then(resp => {
      setPostData(resp)
      navigate('/')
    })
  }

useEffect(() =>{
fetch('/flairs')
.then(resp => resp.json())
.then(setFlairs)
}, [])
    
  

// console.log(flairs)

const displayFlairsOnDropDown = flairs.map(flair =>{
console.log(flair.id)
return <option key={flair.id} value={flair.id}>{flair.name}</option>
})




  return (
    <>
    <form onSubmit={handleSubmit} className="grid place-items-center overflow-hidden grid-cols-none grid-rows-5 gap-4 pt-20">
      <label className="text-green-400 font-squids">Description</label>
      <input 
        type='text' name='description' 
        value={formData.description} 
        onChange={handleChange}/>
      <label className="text-green-400 font-squids">Select a Flair:</label>

      <select onChange={handleSelectChange}>
        <option value={null}>----</option>
        {displayFlairsOnDropDown}

      </select>

      <input className="font-squids px-2 rounded-lg bg-red-500 hover:bg-green-500" type="submit" value='Create Post' />
      
    </form>
    </>
  )
}

export default CreatePost