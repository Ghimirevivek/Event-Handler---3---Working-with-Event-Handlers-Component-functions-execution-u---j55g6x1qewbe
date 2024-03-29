import React from 'react'
import '../styles/App.css'
const App = () => {
  const handleInput = (event) => {
    // use console.log
    const val = event.target.value
    const id = event.target.id
    console.log(`Input in #${id} is ${val}`)
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} />

      <br />
      <br />

      <label htmlFor="num-input">Number input</label>
      <input id="num-input" type={'number'} onChange={handleInput} />
      <br />
    </div>
  )
}

export default App
