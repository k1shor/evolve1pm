import React from 'react'
import img1 from '../assets/carousel/1.jpeg'

const Cart = () => {
  return (
    <>
    <h1 className='mt-3 text-center text-3xl font-bold underline'>Cart Items</h1>

    <table className='m-auto w-3/4 mt-2 rounded-lg'>
        <thead className='bg-gray-400 text-white '>
            <tr>
                <th className='w-1/12 rounded-tl-md'>S.No.</th>
                <th>Products</th>
                <th className='w-1/12'>Quantity</th>
                <th className='w-2/12'>Price</th>
                <th className='w-2/12'>Total</th>
                <th className='w-2/12'>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <img src={img1} alt="" style={{height:'100px'}} className='m-auto'/>
                    <h2>Product Title</h2>
                </td>
                <td>5</td>
                <td>Rs. 1000</td>
                <td>Rs. 5000</td>
                <td className='text-center'>
                    <button className='edit'>
                        <i className='bi bi-pencil-square'></i>
                    </button>
                    <button className='remove'>
                        <i className='bi bi-trash'></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>
                    <img src={img1} alt="" style={{height:'100px'}} className='m-auto'/>
                    <h2>Product Title</h2>
                </td>
                <td>5</td>
                <td>Rs. 1000</td>
                <td>Rs. 5000</td>
                <td className='text-center'>
                    <button className='edit'>
                        <i className='bi bi-pencil-square'></i>
                    </button>
                    <button className='remove'>
                        <i className='bi bi-trash'></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    
    </>
  )
}

export default Cart