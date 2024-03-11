import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col w-full bg-slate-400 py-2 md:h-12 relative' >
                <h1 className='md:w-1/4 text-center text-3xl font-bold hover:text-blue-900 w-full'>
                    <Link to={'/'}>Online Store</Link>
                </h1>
                <div className='flex md:w-1/2 relative rounded-md w-11/12 m-auto'>
                    <input type='text' className='w-full rounded-md outline-none px-3  left-0 py-1' />
                    <button className="px-4 py-1 absolute right-0 rounded-e-md hover:bg-slate-300">Search</button>
                </div>
                <div className='h-full md:w-1/4 w-full text-2xl flex justify-evenly'>
                    <Link to={'/login'}><i className='bi bi-box-arrow-in-left'></i></Link>
                    <Link to={'/register'}><i className='bi bi-person-plus'></i></Link>
                    <Link to={'/cart'}><i className='bi bi-cart'></i></Link>
                </div>
            </div>


            <nav className='flex list-none bg-slate-500 text-yellow-400 justify-evenly'>
                <li style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    <Link to={'/'}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to={'/products'}>
                        PRODUCTS
                    </Link>
                </li>
                <li>
                    <Link to={'/first'}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to={'/second'}>
                        SERVICES
                    </Link>
                </li>
                <li>BLOGS</li>
                <Link to='/contact'><li>
                    CONTACT</li>
                </Link>
            </nav>

            {/* <button className='submit'>Submit</button> */}
        </>
    )
}

export default Header