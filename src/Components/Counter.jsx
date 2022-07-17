import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setcount] = useState(0);

    useEffect(() => {
        console.log("First One");
        if (count === 0) {
            return
        } else {
            document.title = `React App (${count})`
        }
    },[count]);

    useEffect(() => {
        console.log("Second sex");
    },[]);


    console.log("Outside :)");

    return (
        <div className='container'>
            <h1 className="text-center">{count}</h1>
            <div className="button">
                <button className="btn btn-primary text-center" onClick={() => setcount(count + 1)}>Click Me</button>
            </div>
        </div>
    )
}

export default Counter