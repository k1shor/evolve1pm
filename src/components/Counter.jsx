import React, { useEffect, useState } from 'react'
const Counter = () => {
    let [count, setCount] = useState(100)
    let [data, setData] = useState(1000)
    // let [variable, function] = useState(initial value)
    // variable - name of the state variable
    // function - function to update state of state variable
    // initial value - starting value of state variable
    // 0-9 - number
    // '' or "" - string
    // []  - array
    // {}  - object

    /*
create another useState variable "data" , and function "setData" and initial value 1000
create 2 buttons to increase and decrease value of data by 100
    */
    /*
    useEffect(function, [dependency])
    
    function -> effect to be shown
    [dependecy] -> list of viariables that trigger the function

    [var1, var2] -> runs the function whenever var1 and var2 updates
    [] -> runs the function once when the page loads
    null -> if no dependency is passed, runv the function everytime anything updaates
    */

    useEffect(() => {
        window.alert("Value updated")
    },[count, data])


    const handleIncrease = () => {
        setCount(++count)
    }
    const handleDecrease = () => {
        setCount(--count)
    }
    return (
        <div className='h-96 w-full flex justify-center items-center flex-col'>
            <h1>
                Counter : {count}
            </h1>
            <div>
                {
                    count < 110 &&
                    <button className={`edit ` + (count <= 0 && `rounded-e-md`)} onClick={handleIncrease}

                    >Increase Count</button>
                }
                {
                    count != 0 &&
                    <button className={'bg-slate-500 ' + (count >= 110 && `rounded-s-md`)} onClick={() => {
                        setCount(0)
                    }} >RESET Count</button>
                }
                {
                    count > 0 &&
                    <button className='remove' onClick={handleDecrease}>Decrease Count</button>
                }
            </div>

            <h1>Data: {data}</h1>
            <div>
                <button className='edit' onClick={() => setData(data + 100)}>Increase</button>
                <button className='bg-slate-500' onClick={() => setData(1000)}>Reset</button>
                <button className='remove' onClick={() => setData(data - 100)}>Decrease</button>

            </div>
        </div>
    )
}

export default Counter