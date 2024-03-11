import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="w-full p-5">
                <form className='w-full md:w-3/4 lg:w-1/2 bg-slate-300 p-10 m-auto rounded-lg shadow-md'>
                    <h1 className='text-center text-3xl underline uppercase font-bold text-blue-800'>Register</h1>

                    <label htmlFor="fname" className='text-xl'>First Name</label>
                    <input type="text" id="fname" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />

                    <label htmlFor="lname" className='text-xl'>Last Name</label>
                    <input type="text" id="lname" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />

                    <div className='flex justify-between w-full'>

                        <div className='w-2/5'>
                            <label htmlFor="dob" className='text-xl'>Date of Birth</label>
                            <input type="date" id="dob" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />
                        </div>

                        <div className='w-1/2'>
                            <label className='text-xl'>Gender</label>
                            <div className='flex justify-evenly py-2'>
                                <div>
                                    <input type="radio" id="male" name='gender' className='me-2' />
                                    <label htmlFor='male'>Male</label>
                                </div>

                                <div>
                                    <input type="radio" id="female" name='gender' className='me-2' />
                                    <label htmlFor='female'>Female</label>
                                </div>

                                <div>
                                    <input type="radio" id="other" name='gender' className='me-2' />
                                    <label htmlFor='other'>Others</label>
                                </div>

                            </div>
                        </div>
                    </div>


                    <label htmlFor="address" className='text-xl'>Address</label>
                    <input type="text" id="address" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />

                    <label htmlFor="phone" className='text-xl'>Phone</label>
                    <input type="text" id="phone" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />

                    <label htmlFor="email" className='text-xl'>Email</label>
                    <input type="text" id="email" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />

                    <label htmlFor="pwd" className='text-xl'>Password:</label>
                    <input type="password" id="pwd" className='w-full outline-none px-4 py-2 rounded-md mb-4' />

                    <label htmlFor="cpwd" className='text-xl'>Confirm Password:</label>
                    <input type="password" id="cpwd" className='w-full outline-none px-4 py-2 rounded-md mb-4' />

                    <div className="text-center w-full">
                        <button className='w-full m-auto bg-blue-700 py-2 text-white text-xl rounded-md hover:bg-blue-500 hover:shadow-lg active:bg-blue-600 active:shadow-md'>Register</button>
                    </div>
                    <div className='p-2'>
                        <input type="checkbox" id='rem' />
                        <label htmlFor="rem" className='ml-2 text-xl'>I accept the terms and conditions.</label>

                    </div>
                    <hr className='my-5' />
                    <div className='text-xl text-center'>Already Have an account ?
                        <Link to={'/login'} className='text-blue-700 hover:text-blue-500'> Login.</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register