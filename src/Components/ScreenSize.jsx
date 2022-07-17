import React, { useEffect, useState } from 'react'

const ScreenSize = () => {

    const [widthCount, setwidthCount] = useState(window.screen.width);

    const actualWidth = ()=>{
        setwidthCount(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',actualWidth);
        
        return ()=>{
            window.removeEventListener('resize',actualWidth);
            
        }
    })

    return (
        <div className='container sizeContainer'>
            <p>The actual size of the window is: </p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default ScreenSize