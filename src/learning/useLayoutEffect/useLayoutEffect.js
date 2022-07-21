import React from 'react'
import { useLayoutEffect,useEffect } from 'react';
import { useState } from 'react'

// -> https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/

const UseLayoutEffect = () => {
    const [randomNum,setRandomNum] =   useState(0);
    const [effectLogs,setEffectLogs] = useState([]);

    useLayoutEffect(()=>{
        setEffectLogs(prevEffectLogs => [...prevEffectLogs,"effect fn has invoked"])
    },[randomNum])

  return (
    <div className='cotainer text-center mt-5'>
        <h1>{randomNum}</h1>
        <button className="btn btn-danger" onClick={()=>setRandomNum(Math.random())}>Generate Random Number!</button>
        <div>
            {
                effectLogs.map((effect,index)=>{
                    return <div key={index}>{'🍔'.repeat(index) + effect}</div>
                })
            }
        </div>
    </div>
  )
}

export default UseLayoutEffect