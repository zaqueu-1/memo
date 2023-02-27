import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [text, setText] = useState('')
    const [todoArray, setTodoArray] = useState([])

 
    return (
        <AppContext.Provider value={{
            text,
            setText,
            todoArray,
            setTodoArray
        }} >
            {children}
            </AppContext.Provider>
      )
    }

const AppConsumer = () => useContext(AppContext)

export { AppContext, AppProvider, AppConsumer }