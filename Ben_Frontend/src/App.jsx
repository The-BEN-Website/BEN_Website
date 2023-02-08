import { useState } from 'react'
import './App.css';
import HomePage from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex-col gap-24">
      <HomePage/>
    </div>
  )
}

export default App
