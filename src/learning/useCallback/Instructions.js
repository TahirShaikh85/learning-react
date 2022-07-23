import React,{memo} from 'react'

const Instructions = ({doSomething,siblings}) => {
    console.log("Instructions rendered");
  return (
    <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
      <p>{doSomething()}</p>
      <p>I've {siblings} siblings</p>
    </div>
  )
}

export default memo(Instructions)