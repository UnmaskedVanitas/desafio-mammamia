import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function Carta({ pizzaData }) {

    const navigate = useNavigate()
    const detalles = (pizzaid) => {
        navigate(`pizza/${pizzaid}`)

    }



    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizzaData.img} />
            <Card.Body>
                <Card.Title>{pizzaData.name}</Card.Title>
                <Card.Text>{pizzaData.desc}
                </Card.Text>
                <Button variant="primary" onClick={() => detalles(pizzaData.id)}>Ver Mas</Button>
                <Button variant="primary">Añadir</Button>
            </Card.Body>
        </Card>
    );
}

export default Carta;