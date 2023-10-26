import React, { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { CartContext } from '../../hooks/Context/Context';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <>
            <div className="position-relative">
                <BiCart size={32} className='text-white' />
                <Badge bg="danger" className="position-absolute top-0 translate-middle">
                    {totalQuantity}
                </Badge>
            </div>   
        </>
    )
}

export default CartWidget