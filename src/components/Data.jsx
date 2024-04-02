import React, { useEffect, useState } from 'react'
import Card from './Card'

const Data = () => {
    let [products, setProducts] = useState([])
    let [limit, setLimit] = useState(8)

    useEffect(() => {
        fetch('https://dummyjson.com/products',)
            .then(response => {
                return response.json()
            })
            .then(data => {
                return setProducts(data.products.slice(0, limit))
            })
            .catch(error => console.log(error))
    }, [limit])


    return (
        <>
            <div className='w-3/4 p-6 shadow-lg m-auto my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products?.map(product => {
                        return <Card 
                        image={product.images[0]}
                        title = {product.title}
                        price = {product.price}
                        rating = {product.rating}
                        id = {product.id}
                        />
                    })
                }

            </div>
            <button onClick={
                () =>
                {
                    console.log(limit)
                    setLimit(limit + 4)
                }
            } className='edit'>Show More</button>
        </>

    )
}

export default Data