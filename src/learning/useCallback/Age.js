import React from 'react'

const Age = ({ age, handleClick }) => {
    console.log("Age rendered");
    return (
        <div>
            <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
                Today I am {age} Years of Age
            </div>
            <pre> click the button below 👇</pre>
            <button onClick={handleClick}>Get older!</button>
        </div>
    )
}

export default Age