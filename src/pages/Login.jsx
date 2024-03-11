import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="w-full p-5">
                <form className='w-full md:w-3/4 lg:w-1/2 bg-slate-300 p-10 m-auto rounded-lg shadow-md'>
                    <h1 className='text-center text-3xl underline uppercase font-bold text-blue-800'>Login</h1>
                    <label htmlFor="email" className='text-xl'>Email</label>
                    <input type="text" id="email" className='w-full outline-none px-4 py-2 rounded-md block mb-4' />
                    <label htmlFor="pwd" className='text-xl'>Password:</label>
                    <input type="text" id="email" className='w-full outline-none px-4 py-2 rounded-md mb-4' />
                    <div className="text-center w-full">
                        <button className='w-full m-auto bg-blue-700 py-2 text-white text-xl rounded-md hover:bg-blue-500 hover:shadow-lg active:bg-blue-600 active:shadow-md'>Submit</button>
                    </div>
                    <div className="flex justify-between">
                        <div className='p-2'>
                            <input type="checkbox" id='rem' />
                            <label htmlFor="rem" className='ml-2 text-xl'>Remember Me</label>

                        </div>
                        <Link to='/forgetpassword' className='text-xl text-blue-700 hover:text-blue-400 p-2'>Forget Password</Link>
                    </div>
                    <hr className='my-5' />
                    <div className='text-xl text-center'>Do not Have an account ?
                        <Link to={'/register'} className='text-blue-700 hover:text-blue-500'> Sign up.</Link>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Login