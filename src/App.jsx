import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"aftab",
    age:21
  }
  let newArr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel="aftab" btntext="click1" />
      <Card channel="shaik" btntext="visitme"/>
    </>
  )
}

export default App
