import React from 'react';
import Carta from '../Components/Carta'
import { useContext } from 'react';
import { myContext } from '../context';
import '../Styles/home.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {


    const { pizzaData } = useContext(myContext)
    console.log(pizzaData)
    return (
        <div className='home'>
            {pizzaData.map((data) => <Carta pizzaData={data} />)}
        </div>
    );
}

export default Home;
