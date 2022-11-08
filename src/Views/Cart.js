import React, { useContext } from 'react';
import Carta from '../Components/Carta';
import { myContext } from '../context';


const Cart = () => {
    const { carro } = useContext(myContext)
    return (
        <div>
            {carro.map((data) => <Carta pizzaData={data} />)}
        </div>
    );
}

export default Cart;
