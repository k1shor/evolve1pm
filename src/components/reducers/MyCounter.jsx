import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyCounter = () => {
// let counterStore = useSelector(store=>store)
// let count = counterStore.count

// let count = useSelector(store=>store.count)

let {count} = useSelector(store=>store.countStore)

let dispatch = useDispatch()

    return (
        <>
            <div className='h-96 w-full flex justify-center items-center flex-col'>
                <h1>
                    Counter : {count}
                </h1>

                <button className='bg-blue-700' onClick={()=>{
                    return dispatch({type: "INCREASE_COUNT"})
                }}>Increase</button>
                <button className='bg-red-700' onClick={()=>{
                    return dispatch({type: "DECREASE_COUNT"})
                }}>Decrease</button>
                <button className='bg-orange-700' onClick={()=>{
                    return dispatch({type: "RESET"})
                }}>Reset</button>

            </div>
        </>
    )
}

export default MyCounter