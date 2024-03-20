import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [names, setNames] = useState([])

  useEffect(() => {
    axios.get('/api/users')
    .then((res)=>{
      setNames(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })
  

  return (
    <>
      <h1>Names</h1>
      <p>NAMES: {names.length}</p>
      {
        names.map((name,id)=>
          <div key={name.id}>
            <h3>{`Name of the person: ${name.first_name} ${name.last_name}`}</h3>
            <p>{`Email ID: ${name.email}`}</p>
            <p>{`Gender: ${name.gender}`}</p>
            <p>{`Job Title: ${name.job_title}`}</p>
          </div>
        )
      }
    </>
  )
}

export default App
