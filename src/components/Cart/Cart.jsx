import React, { useContext } from "react";
import { CartContext } from "../../hooks/Context/Context";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {

    const { cart, resetCartItem, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(item => <CartItem key={item.id} {...item}></CartItem>)}
            <h3>Total: ${total}</h3>
            <Button onClick={() => resetCartItem()}></Button>
            <Link to="/checkout">Checkout</Link>
        </div>
    )

}

export default Cart;