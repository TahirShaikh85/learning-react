import React, { useState } from 'react'

// normal useState()
// -->  https://bit.ly/3v53bfg

const UseState = () => {

  const [age, setAge] = useState(19);
  const [siblings, setSiblings] = useState(2);

  const handleAge = () => {
    setAge(age + 1);
  }
  const handleSiblings = () => {
    setSiblings(siblings + 1);
  }

  return (
    <div className="container text-center">
      <h1 className="text-center mt-5">Normal UseState()</h1>
      <p>Today I'am <b>{age}</b> old</p>
      <p> I've <b>{siblings}</b> siblings</p>
      <button className='btn btn-primary mx-2' onClick={handleAge}>Get Older</button>
      <button className='btn btn-warning' onClick={handleSiblings}>Increase Siblings</button>
    </div>
  )
}

export default UseState