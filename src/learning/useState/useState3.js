import React, { useState } from 'react'

// functional useState
// This is ideal when the state update depends on some previous value of state.
// -->  https://bit.ly/3v53bfg

const UseState3 = () => {
    const [count, setCount] = useState(0);

    // e.g 1.
    const [token] = useState(() => {
        let token = localStorage.getItem("my-token");
        return token || "Default#Token"
    })

    // e.g.2
    return (
        <div className='container text-center'>
            <h1 className="text-center mt-5">functional UseState()</h1>
            <p className='text-center mb-3'>This is ideal when the state update depends on some previous value of state.</p>

            {/* <div className="eg1">Token is {token}</div> */}

            {/* e.g.2 */}
            <div className="eg2 mb-5">
                <h5 className='mb-3'>Count value is: {count}</h5>
                <button className="btn btn-primary" onClick={()=>setCount(prevCount => prevCount + 1 )}>+</button>
                <button className="btn btn-danger mx-2" onClick={()=>setCount(0)}>reset</button>
                <button className="btn btn-warning" onClick={()=>setCount(prevCount => prevCount - 1 )}>-</button>
            </div>
        </div>
    )
}

export default UseState3;