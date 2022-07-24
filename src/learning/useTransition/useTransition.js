import React,{useTransition,useState} from 'react'

// Add useTransition and useDeferredValue to separate urgent updates from transitions.
// https://www.youtube.com/watch?v=N5R6NL3UE7I

// useTransition() can be used to tell React that certain state updates have a lower priority 
//(i.e., all other state updates or UI rendering triggers have a higher priority).

// useTransition() hook provide two elements(function) isPending (true/false) to add loading screen (telling you whether the low-priority state update is still pending,)
// startTransition() function that can be wrapped around a state update to tell React, that it is a low-priority update.

// Note: Don't overdose useTransition() and useDeffereValue() beacause they render each state (component twice) 

const UseTransition = () => {
  const [isPending,startTransition] = useTransition();
  const [text,setText] = useState("");
  const [list,setList] = useState([]);
  const LIST_SIZE = 2000;

  const onChange = (e)=>{
    setText(e.target.value);
    // because of the startTransition() is applied to below state update above ☝ state update get higher priority automatically

    // below state update blocking our input field to reflect changes because this 👇 code block has heavy task to do.
    // so we wrapped it around startTransition() function, telling react that set lower priority to this 👇 state update
   startTransition(()=>{
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
   })

   // try this example with and without startTransition() function to see the actual effect of using useTransition() hook
  }
  return (
    <div className='container'>
        <input type="text" className="form-control" value={text} onChange={onChange} />
        <div className="mt-5">
          {
            isPending ? 'Loading...' 
            :
            list.map((listItem,index)=>{
              return <div key={index}>{listItem}</div>
            })
          }
        </div>
    </div>
  )
}

export default UseTransition