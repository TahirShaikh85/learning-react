import React,{useReducer} from 'react';
import UseReducer2 from './useReducer2';

const initialState = { width: 15 };

const reducer = (state,action)=>{
    switch (action) {
        case 'plus':
            return {width:state.width + 15}
        case 'minus':
            return {width:state.width - 15}
        default:
            throw new Error("Bhai kya kr raha hai tu..");;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='container text-center mt-5'>
        <div style={{background:'teal',height:"30px",width:state.width, margin:"10px auto"}}></div>

        <div className='mt-5'>
            <button className="btn btn-primary mx-2" onClick={()=>dispatch('plus')}>Increase</button>
            <button className="btn btn-warning" onClick={()=>dispatch('minus')}>Decrease</button>
        </div>

        <UseReducer2/>
    </div>
  )
}

export default UseReducer;