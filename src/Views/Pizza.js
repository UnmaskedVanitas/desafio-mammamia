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

            </div> : "No se encontro la pizza con este ID"}
        </div>
    );
}

export default Pizza;
