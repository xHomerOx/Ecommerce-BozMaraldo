import { BiCart } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';

const CartWidget = ( { item }) => {

    // CartWidget en NavBar
    return (
        <>
            <div className="position-relative">
                <BiCart size={32} className='text-white' />
                <Badge bg="danger" className="position-absolute top-0 translate-middle">
                    {item}
                </Badge>
            </div>   
        </>
    )
}

export default CartWidget