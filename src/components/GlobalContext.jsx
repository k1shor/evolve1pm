import React, { createContext } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {
    return (
        <GlobalContext.Provider value={"This is coming from global context."}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider