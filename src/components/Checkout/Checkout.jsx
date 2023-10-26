import { useState, useContext } from "react";
import { CartContext } from "../../hooks/Context/Context";
import { Timestamp, collection, writeBatch } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig/FirebaseConfig";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const {cart, total, clearCart} = useContext(CartContext);

    const createOrder = async({ userName, userPhone, userEmail }) => {
        setLoading(true);

        try {
            const newOrder = {
                buyer: {
                    userName, userPhone, userEmail
                },
                orderItems: cart,
                totalItems: total,
                orderDate: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];

            const ids = cart.map(game => game.id);
            const gameReferences = collection(db, 'games');


        }catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }

    }

    if (loading) {
        return <h3>Order is being generated...</h3>
    }

    if(orderId) {
        return <h3>Order ID is {orderId}</h3>
    }

    return (
        <div>
            <h2>Checkout</h2>
        </div>
    )

}

export default Checkout;