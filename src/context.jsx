import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import pizzas from './Assets/pizzas.json'

export const myContext = createContext({})


export function ContextPizzas({ childrenComponent }) {

    const [pizzaData, setPizzaData] = useState([])
    useEffect(() => {
        setPizzaData(pizzas)
    }, [])

    return (

        <myContext.Provider value={{ pizzaData, setPizzaData }}>
            {childrenComponent}
        </myContext.Provider>
    )
}