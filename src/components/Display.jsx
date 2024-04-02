import React, { useContext } from 'react'
import Card from './Card'
import { GlobalContext } from './GlobalContext'

const Display = () => {

    let info = useContext(GlobalContext)

    return (
        <>
        {info}

            <Card name="RAM" address="Kathmandu" />
            <Card name="Shyam" address = "Bhaktapur"/>
            <Card name="RITA" address = "Lalitpur"/>
        </>
    )
}

export default Display