import React, { createContext, useCallback, useState } from 'react'


export const GlobalContext = createContext(null)

const GlobalContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    const handleCounter = useCallback(() => {
        setCounter(counter => counter + 1)
    }, [])

    return (
        <GlobalContext.Provider value={{ counter, handleCounter }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider