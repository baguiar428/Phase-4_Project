import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function EditPostForm({setPostData}) {
    // const{description, flair_id} = post

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state.post)

    // const[currentDescription, setCurrentDescription] = useState(description)
    // const[currentFlairId, setCurrentFlairId] = useState(flair_id)
    const [formData, setFormData] = useState({
        description: location.state.post.description,
        flair_id: location.state.post.flair_id
    })

    function handleChange(e){
        const {name, value} = e.target 
        setFormData({...formData, [name]:value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        const edit = {
            ...formData
        }

        await fetch(`/posts/${location.state.post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edit)
        })
        .then(res =>{
            if (res.ok){
                console.log("Post Updated")
            }else{
                res.json().then(data => {
                    console.log("Errors: ", data)
                })
            }
        })

        await fetch("/posts")
        .then(resp => resp.json())
        .then(resp =>{
            setPostData(resp)
            navigate('/')
        })
    }
    
  return (
    <>
    <form onSubmit={handleSubmit} className="grid place-items-center overflow-hidden grid-cols-none grid-rows-4 gap-4 pt-20">
        <label className="text-green-400 font-squids">
            Description
        </label>
        <input type='text' name='description' value={formData.description} onChange={handleChange}/>

        <label className="text-green-400 font-squids">
            Flair
        </label>
        <input type='text' name='flair_id' value={formData.flair} onChange={handleChange}/>

        <input className="font-squids" type='submit' value='Edit' />

    </form>
    </>
  )
}

export default EditPostForm