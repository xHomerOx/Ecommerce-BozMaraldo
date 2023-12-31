import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../hooks/Context/Context';


const ItemDetail = ({ game, id, thumbnail }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { game };

    addItem(item, id, quantity);
  }

  //The single game details.
  return (
        <Container>
            <Row xs={1} md={3} className="g-4 justify-content-center">
                <Col key={game.id}>
                    <Card className='bg-dark'>
                        <Card.Img variant="top" src={thumbnail} alt={game.title} />
                        <Card.Body>
                            <Card.Title className='text-white'>{game.title}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='bg-dark text-white'>Genre: {game.genre}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>Platform: {game.platform}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>Publisher: {game.publisher}</ListGroup.Item>
                            <ListGroup.Item className='bg-dark text-white'>Developer: {game.developer}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            {
                                quantityAdded > 0 ? (
                                    <Link to="/cart">
                                        <Button>Finalize purchase</Button>
                                    </Link>
                                ) : (
                                    <ItemCount initial={1} stock={game.stock} price={game.price} addItem={handleOnAdd} />
                                )
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>    
  );
}

export default ItemDetail;
