import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import { myContext } from '../context';

function Carta({ pizzaData }) {

    const { setCarro } = useContext(myContext)
    const navigate = useNavigate()
    const detalles = (pizzaid) => {
        navigate(`pizza/${pizzaid}`)

    }
    const addItem = (pizzaData) => {
        setCarro((prevValue) => [...prevValue, pizzaData])

    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizzaData.img} />
            <Card.Body>
                <Card.Title>{pizzaData.name}</Card.Title>
                <Card.Text>{pizzaData.desc}</Card.Text>
                <Card.Text>Precio: {pizzaData.price}</Card.Text>
                <Button variant="secondary" onClick={() => detalles(pizzaData.id)}>Ver Mas</Button>
                <Button variant="secondary" onClick={() => addItem(pizzaData)}>Añadir</Button>
            </Card.Body>
        </Card>
    );
}

export default Carta;