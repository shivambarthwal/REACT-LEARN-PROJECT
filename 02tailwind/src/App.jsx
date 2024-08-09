import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 mb-8 w-[250px] text-center m-auto'>TailWind CSS</h1>
    <Card username = "shivam" btnText="salary" />
    <Card username="ishika" btnText="view age"/>
    </>
  )
}

export default App
