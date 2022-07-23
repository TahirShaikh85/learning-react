import React, { useRef } from 'react';

// useRef is used to manupulate useRef()
// useRef returns a “ref” object. Values are accessed from the .current property of the returned object. 

const UseRef = () => {

    const refElement = useRef(null);
    console.log(refElement);

    function handleClick(){
        refElement.current.value = " The input box below will be focused and populated with some text(imperatively) upon clicking the button above";
        refElement.current.focus();
    }

    return (
        <section style={{ textAlign: 'center' }}>
            <button onClick={handleClick}>Focus and Populate Text Field</button>
            <label
                htmlFor="story"
                style={{
                    display: "block",
                    background: "olive",
                    margin: "1em",
                    padding: "1em"
                }}
            >
                The input box below will be focused and populated with some text
                (imperatively) upon clicking the button above.
            </label>

            <textarea ref={refElement} id="story" rows="5" cols="33" />
        </section>
    )
}

export default UseRef