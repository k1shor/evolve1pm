import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const products = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}
    ]
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-5'>
                <div className="bg-slate-300 md:col-span-2 lg:col-span-1 col-span-4 p-5 min-h-screen">
                    <h1 className='text-2xl font-bold text-blue-800 underline'>Deals</h1>
                    <ul className='ps-5 text-xl font-bold text-blue-700'>
                        <Link to="#"><li>Daily Deals</li></Link>
                        <Link to='#'><li>Most Popular</li></Link>
                        <Link to='#'><li>Flash Sales</li></Link>
                        <Link to='#'><li>New Year Offer</li></Link>
                    </ul>

                    <h1 className='text-2xl font-bold text-blue-800 underline mt-4' >Category</h1>
                    <ul className='ps-5 text-xl text-blue-700'>
                        <li>
                            <input type="checkbox" className='me-1' id='cat1' /><label htmlFor="cat1">Mobiles</label>
                        </li>
                        <li><input type="checkbox" className='me-1' id='cat2' /><label htmlFor="cat2">Laptops</label></li>
                        <li><input type="checkbox" className='me-1' id='cat3' /><label htmlFor="cat3">Beauty Products</label></li>
                        <li><input type="checkbox" className='me-1' id='cat4' /><label htmlFor="cat4">Fitness</label></li>
                        <li><input type="checkbox" className='me-1' id='cat5' /><label htmlFor="cat5">Home</label></li>
                        <li><input type="checkbox" className='me-1' id='cat6' /><label htmlFor="cat6">Garden</label></li>

                    </ul>

                    <h1 className='text-2xl font-bold text-blue-800 underline mt-4' >Price Range</h1>
                    <ul className='ps-5 text-xl text-blue-700'>

                        <li><input type="radio" className='me-1' id='price1' name='price' /><label htmlFor="price1">Upto Rs.1000</label></li>
                        <li><input type="radio" className='me-1' id='price2' name='price' /><label htmlFor="price2">Upto Rs.10000</label></li>
                        <li><input type="radio" className='me-1' id='price3' name='price' /><label htmlFor="price3">Upto Rs.50000</label></li>
                        <li><input type="radio" className='me-1' id='price4' name='price' /><label htmlFor="price4">Upto Rs.100000</label></li>
                        <li><input type="radio" className='me-1' id='price5' name='price' /><label htmlFor="price5">Above Rs.100000</label></li>

                    </ul>
                </div>
                <div className="bg-slate-200 md:col-span-3 col-span-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        products.map(item => {
                            return <div className="card p-5 col-span-1 mx-32 sm:mx-5 border border-3 border-gray-700 my-2 rounded-lg shadow-md">
                                <img src="" alt="" style={{ width: '100%', height: '150px' }} />
                                <h2>Title</h2>
                                <h3>Price</h3>
                                <button className='edit w-100 rounded-lg'>Add to Cart</button>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Products