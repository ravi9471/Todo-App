import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id='heading'>Todo</h1>
      <Todo />
    </>
  )
}

export default App
