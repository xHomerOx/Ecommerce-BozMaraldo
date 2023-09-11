import { BiCart } from 'react-icons/bi';

const CartWidget = ({children}) => {
  return (
    <>
        <div>{children}</div>
        <BiCart size={32} className='text-white'/>
    </>
  )
}

export default CartWidget