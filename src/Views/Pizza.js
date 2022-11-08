import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../context';


const Pizza = () => {
    const params = useParams()
    const { pizzaData } = useContext(myContext)
    const pizzaDetails = pizzaData.find((pizza) => pizza.id === params.id)

    return (
        <div>
            {pizzaDetails ? <div>
                <div><img src={pizzaDetails.img}></img></div>
                <h1>{pizzaDetails.name}</h1>
                <p>{pizzaDetails.desc}</p>
                <h4>Ingredientes:</h4>
                <p>- {pizzaDetails.ingredients[0]}</p>
                <p>- {pizzaDetails.ingredients[1]}</p>
                <p>- {pizzaDetails.ingredients[2]}</p>
                <p>- {pizzaDetails.ingredients[3]}</p>
                <h1>Precio: {pizzaDetails.price}</h1>



            </div> : "No se encontro la pizza con este ID"}
        </div>
    );
}

export default Pizza;
