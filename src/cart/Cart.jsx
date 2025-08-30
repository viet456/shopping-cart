import { useCart } from "./CartContext"

export function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return <h2>Your cart is empty</h2>;
    }
    return (
        <section>
            <p>Your Shopping Cart Items:</p>
            <div>
                {cartItems.map(item => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </section>
    )
}