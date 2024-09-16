import { useState } from 'react'
import Lottry from './Lottry'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottry n={3} winningSum={15}/>

      
       
    </>
  )
}

export default App
