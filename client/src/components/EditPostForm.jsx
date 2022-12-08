import React, {useState} from 'react'


function EditPostForm({post}) {
    // const{description, flair_id} = post

    // const[currentDescription, setCurrentDescription] = useState(description)
    // const[currentFlairId, setCurrentFlairId] = useState(flair_id)
    const [formData, setFormData] = useState({
        description: post.description,
        flair_id: post.flair_id
    })

    function handleChange(e){
        const {name, value} = e.target 
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const edit = {
            ...formData
        }

        fetch("/posts", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edit)
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

        <input className="font-squids" type='submit' value='Login' />

    </form>
    </>
  )
}

export default EditPostForm