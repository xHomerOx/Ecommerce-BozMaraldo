import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, addItem }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
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
            <Button onClick={decrement} className="me-2">-</Button>
            <Button as="input" type="button" value="Reset" onClick={reset} className="mx-2" />
            <Button onClick={increment} className="ms-2">+</Button>
            <div className="mt-2">
                <Button onClick={() => addItem(quantity)}>Add to cart</Button>
            </div>
        </>
    )
}

export default ItemCount;
