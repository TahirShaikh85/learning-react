import React, { useState,useMemo } from 'react'

// The useMemo function returns a memoized value. 
// useMemo is different from useCallback in that it internalizes return values instead of entire functions.
// Rather than passing a handle to the same function, React skips the function and returns the previous result, until the parameters change.

const UseMemo = () => {
    const [add,setAdd] = useState(10);
    const [sub,setSub] = useState(10);

    
    const multiply = useMemo(()=>{
        console.log("Tahir Shaikh");
        return add * 10;
    },[add])

    return (
        <div className='container mt-5 text-center'>
            <h1>useMemo() hook</h1>
            <div className="mx-auto mt-5">
                <h5>{multiply}</h5>
                <hr />
                <div className='mt-2'> 
                    <h5>{add}</h5>
                    <button className="btn btn-warning" onClick={()=>setAdd(add + 1)}>Add</button>
                </div>
                <hr />
                <div className='mt-2'>
                    <h5>{sub}</h5>
                    <button className="btn btn-success" onClick={()=>setSub(sub - 1)}>Substract</button>
                </div>
            </div>
        </div>
    )
}

export default UseMemo