import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [form, setForm] = useState({email:"",phone:""})
  //Empty String format:
  const [form, setForm] = useState({})
  const handleClick = ()=>{
    alert('Hey I am clicked.')
  }
  // const handleMouse = ()=>{
  //   alert('Hey I am a mouse over.')
  // }
  const handleChange = (e)=>{
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value});
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouse}>
        I am a red div.
      </div> */}
      {/* <input type="text" name='email' value={form.email} onChange={handleChange} /> */}
      {/* <input type="text" name='phone' value={form.phone} onChange={handleChange} /> */}


      {/* Empty String format:- */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
