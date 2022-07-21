import React,{useReducer} from 'react'

const reducer = (state,action)=>{
    return {
        ...state,
        [action.target.name]:action.target.value
    }
}

const UseReducer2 = () => {

    const [formData,setFormData] = useReducer(reducer,{});

    const handlesubmit = (e) => {
        e.preventDefault();

        if(formData.username.length < 5){
           return alert("Username must be greater than 5")
        }

        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let passwordValidate = regex.test(formData.password);

        if(!passwordValidate){
            return alert("min 8 letter password, with at least a symbol, upper and lower case letters and a number")
        }
        console.log("Form data: ",formData);
    }
    return (
        <form className='mx-auto w-50 my-5' onSubmit={handlesubmit}>
            <input type="text" placeholder='Enter Name' onChange={setFormData} className="form-control mb-1" name='username' />
            <input type="text" placeholder='Enter Password' onChange={setFormData} className="form-control"  name='password'/>
            <button className="btn btn-danger mt-1">Submit</button>
        </form>
    )
}

export default UseReducer2;