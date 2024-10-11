import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          Image Generator
        </h1>
        <input type="text" className='input_bar' placeholder='Enter Text Here.....' />
        <button>
          generate Image
        </button>
      </div>       
    </>
  )
}

export default App
