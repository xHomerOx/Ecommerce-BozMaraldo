import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../hooks/Context/Context';

const ItemDetail = ({ game }) => {
  const { item, addCartItem, removeCartItem, resetCartItem } = useCart();

  const addItem = () => {
    addCartItem(1);
  };

  const removeItem = () => {
    if (item > 0) {
      removeCartItem(1);
    }
  };

  const resetItem = () => {
    resetCartItem();
  };

  return (
        <Container>
            <Row xs={1} md={3} className="g-4 justify-content-center">
                <Col key={game.id}>
                    <Card className='bg-dark'>
                        <Card.Img variant="top" src={game.thumbnail} alt={game.title} />
                        <Card.Body>
                            <Card.Title className='text-white'>{game.title}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='bg-dark text-white'>Genero: {game.genre}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>Plataforma: {game.platform}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>Editor: {game.publisher}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>Desarrollador: {game.developer}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button onClick={removeItem}>-</Button>
                            <Button as="input" type="button" value="Resetear" onClick={resetItem}/>
                            <Button onClick={addItem}>+</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>    
  );
}

export default ItemDetail;
