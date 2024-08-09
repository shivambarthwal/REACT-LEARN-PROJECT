
import { useState } from 'react'
function App() {
  let [counter,setCounter] = useState(5);

  const addvalue = () =>{
    setCounter(counter+1)
  }

  let removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
 <button onClick={addvalue}> Add Here </button>
 <button onClick={removeValue}> Remove Here </button>
    </>
     
  )
}

export default App
