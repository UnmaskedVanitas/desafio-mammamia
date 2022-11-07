import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';


const Pizza = () => {
    const params = useParams()
    const { pizzaData } = useContext(myContext)
    const pizzaDetails = pizzaData.find((pizza) => pizza.id === params.id)

    return (
        <div>
            {pizzaDetails ? <div></div>}
        </div>
    );
}

export default Pizza;
