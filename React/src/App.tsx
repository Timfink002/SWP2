import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>  
 <h1>Willkommen</h1>
 <div className='Card-Container'>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
 </div>



    </>
  )
}

export default App
