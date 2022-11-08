import React, { useContext } from 'react';
import Carta from '../Components/Carta';
import { myContext } from '../context';
import Navigation from '../Components/Navigation';
import '../Styles/carro.css'


const Cart = () => {
    const { carro } = useContext(myContext)
    console.log(carro.length)
    return (
        <div>

            {carro.map((data) =>

                <div key={data.id}>
                    <div><img className='carro' src={data.img}></img></div>{data.name + ", Precio: " + data.price}
                </div>)}

        </div>
    );
}

export default Cart;
