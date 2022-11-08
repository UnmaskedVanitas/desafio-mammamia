import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import { myContext } from '../context';
import ListGroup from 'react-bootstrap/ListGroup';

function Navigation({ pizzaData }) {

    const { setCarro } = useContext(myContext)
    const navigate = useNavigate()
    const detalles = (pizzaid) => {
        navigate(`pizza/${pizzaid}`)

    }
    const addItem = (pizzaData) => {
        setCarro((prevValue) => [...prevValue, pizzaData])

    }



    return (
        <ListGroup>
            <ListGroup.Item>{pizzaData.id} * {pizzaData.price}</ListGroup.Item>
        </ListGroup>
    )
}
export default Navigation