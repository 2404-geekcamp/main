import { useState } from 'react'
import './App.css'
import UserId from './pages/UserId.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserId />
    </>
  )
}

export default App
