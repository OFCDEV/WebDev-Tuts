import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("devV")
  const handleClick = ()=>{
    alert('Hey I am clicked.')
  }
  const handleMouse = ()=>{
    alert('Hey I am a mouse over.')
  }
  const handleChange = (e)=>{
    setName(e.target.value)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouse}>
        I am a red div.
      </div> */}
      <input type="text" name='email' value={form.name} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
