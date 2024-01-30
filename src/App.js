// src/App.js
import React,{useState,useEffect} from 'react';
import FeedbackForm from './FeedbackForm';
import axios from 'axios';
function App() {
const [courseName,updateCourseName]=useState("Not submitted")
const updateCourse = async()=>{
   const res = await axios.get("http://localhost:3001/user")
   updateCourseName(res.data)
 
}

  return (
    <div className="App">
  
      <FeedbackForm />
  
    </div>
  );
}

export default App;
