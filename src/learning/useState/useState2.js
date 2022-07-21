import React, { useState } from 'react'

// object useState
// Use object state variable
// Multiple state objects updated via a state object variable.
// -->  https://bit.ly/3v53bfg


const UseState2 = () => {
    const [state, setState] = useState({ age: 19, siblingsNum: 2 })

    const handleClick = (val) => {
        setState({
            ...state,
            [val]: state[val] + 1,
            // e.g.
            // age:{age[age] + 1}
        })
        console.log(val); // output age/siblingsNum
    }
    const { age, siblingsNum } = state;
    console.log(state);

    return (
        <div className='container text-center'>
            <h1 className="text-center mt-5">Object UseState()</h1>
            <p className='text-center mb-3'>Multiple state objects updated via a state object variable.</p>

            <p>Today I'am <b>{age}</b> years old</p>
            <p>I've <b>{siblingsNum}</b> siblings</p>

            <div>
                <button className='btn btn-primary mx-2'  onClick={handleClick.bind(null, 'age')}>Get Older</button>
                <button className='btn btn-warning'  onClick={handleClick.bind(null, 'siblingsNum')}>Increase Siblings</button>
            </div>
        </div>
    )
}

export default UseState2