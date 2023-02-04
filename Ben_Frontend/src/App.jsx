import { useState } from 'react'
import './App.css';
import Header from './pages/Home/Header';
import Words from './pages/Home/Words';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex-col gap-24">
      <Header />
      <Words />
    </div>
  )
}

export default App
