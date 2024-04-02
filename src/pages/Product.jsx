import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
    // let params = useParams()
    // let id = params.id

    let [product, setProduct] = useState({})
    let { id } = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/product/${id}`)
            .then(result => {
                console.log(result)
                return setProduct(result.data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <h1>{product.title}</h1>
        </>
    )
}

export default Product