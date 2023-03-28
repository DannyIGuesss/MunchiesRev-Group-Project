import {createContext, useState} from 'react'

export const LoggedUserContext= createContext()

export const LoggedUserProvider = (props) => {
    const [loggedUser, setLoggedUser]= useState([])

    return (
        <LoggedUserContext.Provider value={{
            loggedUser,
            setLoggedUser
        }}>

            {props.children}
        </LoggedUserContext.Provider>
    )
}