import { useState } from 'react'
import './App.css'
import Creatures from './components/Creatures'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Creatures></Creatures>
    </>
  )
}

export default App
