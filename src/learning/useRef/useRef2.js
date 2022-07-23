import React,{ useState,useRef,useEffect } from 'react'

// *** focus on input field when component renders
// https://blog.logrocket.com/complete-guide-react-refs/

const UseRef2 = () => {

    const inputRef = useRef(null);

    const [text,setText] = useState("");

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const onChange = (e)=>{
        setText(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='container'>
        <form className='mx-auto mt-5 w-50 text-center' onSubmit={handleSubmit}>
            <input type="text" onChange={onChange} ref={inputRef} value={text} className="form-control" />
            <button className='btn btn-warning mx-auto mt-1'>Submit</button>
        </form>
        <h3>Submitted value: {text}</h3>
    </div>
  )
}

export default UseRef2