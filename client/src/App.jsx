import { useState } from 'react'
import './App.css'
import Result from './pages/search/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Result/></>
  )
}

export default App
