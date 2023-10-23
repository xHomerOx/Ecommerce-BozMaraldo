import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, addItem }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        // if (quantity < stock) {
            setQuantity(quantity + 1);
        // }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const reset = () => {
        setQuantity(initial);
    }

    return (
        <>
            <div className="text-white">
                {quantity}
            </div>
            <Button onClick={decrement}>-</Button>
            <Button as="input" type="button" value="Resetear" onClick={reset}/>
            <Button onClick={increment}>+</Button>
            <div className="mt-2">
                <Button onClick={() => addItem(quantity)}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount;
