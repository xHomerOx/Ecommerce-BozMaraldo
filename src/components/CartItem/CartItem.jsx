import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../hooks/Context/Context';

const CartItem = ({ game, quantity }) => {

  const { title, id, price } = game;
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  // Cart Price and Quantity.
  return (
    <Card className='bg-dark'>
      <Card.Body>
        <Card.Title className='text-white'>{title} x {quantity}</Card.Title>
        <Card.Text className='text-white'>Price: ${price}</Card.Text>
        <Button variant="danger" onClick={handleRemoveItem}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
