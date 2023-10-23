import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../hooks/Context/Context';

const CartItem = ({ game }) => {
  const { title, price, quantity } = game;
  const { removeCartItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeCartItem(title);
  };

  return (
    <Card className='bg-dark'>
      <Card.Body>
        <Card.Title className='text-white'>{title} x {quantity}</Card.Title>
        <Card.Text className='text-white'>Precio: ${price}</Card.Text>
        <Button variant="danger" onClick={handleRemoveItem}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
