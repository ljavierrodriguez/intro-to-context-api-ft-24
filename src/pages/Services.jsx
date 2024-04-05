import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContextProvider'

const Services = () => {
    const { counter, handleCounter } = useContext(GlobalContext) // GlobalContext.Consumer
    return (
        <>
        <div>Services</div>
        <p>Counter: {counter}</p>
        <button onClick={handleCounter}>Modificar Counter</button>
        </>
    )
}

export default Services