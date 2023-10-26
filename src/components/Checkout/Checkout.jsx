import { useState, useContext } from "react";
import { CartContext } from "../../hooks/Context/Context";
import { Timestamp, collection, writeBatch, doc, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig/FirebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ userName, userPhone, userEmail }) => {
        setLoading(true);

        try {
            const newOrder = {
                buyer: {
                    userName,
                    userPhone,
                    userEmail
                },
                orderItems: cart,
                totalItems: total,
                orderDate: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];

            for (const game of cart) {
                const gameRef = doc(db, 'games', game.id);
                const gameDoc = getDocs(gameRef);
                console.log(gameDoc);
                if (gameDoc.exists()) {
                    const stock = gameDoc.data().stock;
                    if (stock >= game.quantity) {
                        batch.update(gameRef, {
                            stock: stock - game.quantity
                        });
                    } else {
                        outOfStock.push(game.name);
                    }
                }
            }

            if (outOfStock.length > 0) {
                setLoading(false);
                console.error('Error:', outOfStock);
            } else {
                const ordersRef = collection(db, 'orders');
                const orderDocRef = await addDoc(ordersRef, newOrder);
                setOrderId(orderDocRef.id);
                await batch.commit();
                clearCart();
            }

        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }

    if (loading) {
        return <h3>Order is being generated...</h3>
    }

    if (orderId) {
        return <h3>Order ID is {orderId}</h3>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;
