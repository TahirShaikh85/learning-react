import React from 'react'
import { useState } from 'react'
import Model from './Model';

const UseRefCheckout = () => {
    const [quantity,setQuantity] = useState(6);
    const [modelOpen,setModelOpen] = useState(false);

    const price = 20;
    console.log(modelOpen);

    const onClose = ()=> setModelOpen(false);
    const onSubmit = (value) => setQuantity(value);

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>Checkout</h1>

        <table className='mx-auto text-center mt-5 table w-50'>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{quantity}</td>
                    <td>${price}</td>
                    <td>${quantity * price}</td>
                    <td><button className="btn btn-warning" onClick={()=>setModelOpen(!modelOpen)}>Edit Quantity</button></td>
                </tr>
            </tbody>
        </table>
        {
            modelOpen && (
                <Model onSubmit={onSubmit} onClose={onClose} initialValue={quantity} />
            )
        }
    </div>
  )
}

export default UseRefCheckout