import { BiCart } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';

const CartWidget = () => {
    const [item, setItem] = useState(0);

    return (
        <>
            <div className="position-relative">
                {/* Por ahora dejé que clickee en el BiCart para incrementar. */}
                <BiCart size={32} className='text-white' onClick={() => setItem(item + 1)}/>
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    {item}
                </Badge>
            </div>   
        </>
    )
}

export default CartWidget