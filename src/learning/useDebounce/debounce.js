import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const Debounce = () => {
    const [value,setValue] = useState("");
    const debouncedValue = useDebounce(value);

   useEffect(()=>{
    console.log("API call, ",debouncedValue);
   },[debouncedValue])
    return (
        <div className="container">
            <input type="text" className="form-control w-50 mx-auto mt-5" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Search here' />
        </div>
    )
}

export default Debounce