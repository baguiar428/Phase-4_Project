import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar';


function App() {
const currentUser = sessionStorage.getItem("user_id")
const [postData, setPostData] = useState([])

useEffect(() => {


  if(sessionStorage.getItem("user_id")){
    fetch("/posts")
  }
  


}, [currentUser])


// useEffect(() => {
//   fetch("/me").then((resp) => {
//     if(resp.ok){
//       resp.json().then((user) => setUser(user))
//     }
//   })
// }, [])




  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

        <Route exact path="/" element={<Home/>}/>

        {/* <Route exact path="/" element={
        user ? (<Home/>) : (<Login replace to={"/login"} handleLogin={handleLogin}/>)}/>    */}

        <Route path="/login" element={<Login/>}/>
          
        <Route path="/signup" element={<Signup/>}/>

        </Routes>

    </Router>

   </>
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