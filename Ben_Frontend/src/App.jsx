import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-red-600">
      <DeleteIcon className='bg-white'/>
      <h2 className='text-white text-3xl'>Welcome to BEN Website</h2>
      <h2 className='text-white text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto ullam, quidem et provident voluptates deserunt minus expedita officiis rem aut odio. Porro debitis ut assumenda eaque molestiae, laboriosam unde? Labore, error! Ipsum sed architecto fugit placeat autem quia! Illum provident pariatur quidem laudantium consequatur vero rerum deleniti, a aperiam nesciunt sequi sed impedit obcaecati eius, repudiandae vitae quisquam beatae eveniet vel et expedita assumenda! Quo ipsum, suscipit tempora libero pariatur nobis soluta reprehenderit vitae, vero at quaerat dolorem? Asperiores maxime, harum minus repellat obcaecati doloribus temporibus modi minima quo ipsam laudantium commodi voluptate illum tempora? In, deserunt pariatur! Doloribus?</h2>
    </div>
  )
}

export default App
