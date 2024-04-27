import { useState } from 'react'
import './App.css'
import InitProfile from './pages/auth/InitProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><InitProfile/></>
  )
}

export default App
