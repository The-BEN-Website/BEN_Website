import { useState } from 'react'
import './App.css';
import Home from './pages/Home'
// import Header from './pages/Home_Sections/Header';
// import Words from './pages/Home_Sections/Words';
// import Experience from './pages/Home_Sections/Experience';
// import Discipleship from './pages/Home_Sections/Discipleship';
// import Community from './pages/Home_Sections/Community';
// import Newsletter from './pages/Home_Sections/Newsletter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex-col gap-24">
      <Home/>
      {/* <Header />
      <Words />
      <Experience />
      <Community />
      <Discipleship />
      <Newsletter /> */}
    </div>
  )
}

export default App
