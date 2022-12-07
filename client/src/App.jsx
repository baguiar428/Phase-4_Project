import './App.css';
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login';
import { useState, useEffect } from 'react'

function App() {
  const currentUser = sessionStorage.getItem("user_id")
  const [postData, setPostData] = useState([])

  useEffect(() => {


    if (sessionStorage.getItem("user_id")) {
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
    <div className='h-screen bg-gray-700'>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

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