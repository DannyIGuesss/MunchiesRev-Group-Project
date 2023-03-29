import {createContext, useState} from 'react'

export const RestaurantsContext= createContext()

export const RestaurantsProvider = (props) => {
    const [restaurants, setRestaurants]= useState(['InNOut', 'Mcdonalds', 'PizzaHut', 'TacoBell', 'Wendys'])

    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            setRestaurants
        }}>

            {props.children}
        </RestaurantsContext.Provider>
    )
}