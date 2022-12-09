import './App.css';
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login';
import { useState, useEffect } from 'react'
import LoggedOutScreen from './components/LoggedOutScreen';
import EditPostForm from './components/EditPostForm';
import CreatePost from './components/CreatePost'
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';

function App() {
  const currentUser = sessionStorage.getItem("user_id")
  const [postData, setPostData] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/posts')
    .then(resp =>{
      if(resp.ok){
        resp.json().then(setPostData)
      }else{
        resp.json().then(errors => setErrors(errors.error))
      }
    })
  }, [])

  useEffect(() => {
    console.log("Post data has been altered")
  },[postData])

  console.log(postData)
  console.log(errors)


  // useEffect(() => {
  //   fetch("/me").then((resp) => {
  //     if(resp.ok){
  //       resp.json().then((user) => setUser(user))
  //     }
  //   })
  // }, [])




  return (
    <div className='h-full min-h-screen bg-gray-700'>
      <NavBar/>
      <Routes>

        <Route path="/" element={<Home posts={postData} setPostData={setPostData} />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/logout" element={<LoggedOutScreen/>} />

        <Route path="/edit-post" element={<EditPostForm setPostData={setPostData}/>} />

        <Route path="/create-post" element={<CreatePost postData={postData} setPostData={setPostData}/>} />

        <Route path="/my-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;


//----------- Test Code For Project Setup --------------//
// Comment out the code above and uncomment code below to test setup //
// The code below should increment by 1 as you refresh the page //

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }

// export default App;