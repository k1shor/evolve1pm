// import React from 'react'

// const Card = (props) => {
// let {name, address} = props
// // const Card = ({name, address}) => {
//     return (
//         <div className='p-10 border border-3 border-blue-950 m-5'>
//             {/* <h1>Name: {props.name}</h1>
//             <h2>Address: {props.address}</h2> */}
//             <h1>Name: {name}</h1>
//             <h2>Address: {address}</h2>
//         </div>
//     )
// }

// export default Card


import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

const Card = ({ image, title, price, rating, id }) => {

  let msg = useContext(GlobalContext)
  return (
    <div className='shadow-lg p-5'>
      {msg}
      <img src={image} alt="" className='w-full h-36' />
      <h2>{title}</h2>
      <h3>${price}</h3>
      <h4>Rating: {rating}</h4>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  )
}

export default Card