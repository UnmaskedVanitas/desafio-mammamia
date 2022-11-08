import React, { useContext } from 'react';
import Carta from '../Components/Carta';
import { myContext } from '../context';
import Navigation from '../Components/Navigation';
import '../Styles/carro.css'


const Cart = () => {
    const { carro } = useContext(myContext)
    console.log(carro.length)
    return (
        <div className='carrito'>

            {carro.map((data) =>

                <div className='carrito2' key={data.id}>
                    <div><img className='carro' src={data.img}></img></div>
                    <div>{data.name + ", Precio: " + data.price}</div>
                </div>)}

        </div>
    );
}

export default Cart;
