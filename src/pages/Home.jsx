import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContextProvider'
import { AppContext } from '../store/AppContext'

const Home = () => {

    const [search, setSearch] = useState("")
    const { counter, handleCounter } = useContext(GlobalContext) // GlobalContext.Consumer
    const { store, actions } = useContext(AppContext)


    return (
        <>
        <div>Home</div>
        <p>GC Counter: {counter}</p>
        <p>AP Counter: {store.counter}</p>
        <button onClick={handleCounter}>Modificar Counter GC</button>
        <button onClick={actions.handleCounter}>Modificar Counter AC</button>
        <input type="search" className="form-control" placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default Home