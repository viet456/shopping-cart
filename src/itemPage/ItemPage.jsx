import { useItems } from "../ItemContext";
import { useParams } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import { useState } from "react";

export function ItemPage() {
    // pulls the dynamic part of URL ('12' from /items/12)
    const { itemId } = useParams();
    const { items, loading, error } = useItems();
    const { addToCart } = useCart();
    // item quantity to add to cart
    const [quantity, setQuantity] = useState(1);

    if (loading) {
        return <h3>Loading product details...</h3>;
    }
    if (error) {
        return <h3>Error: {error.message}</h3>;
    }
    const item = items.find(product => product.id.toString() === itemId);
    if (!item) {
        return <h3>Oops! Product not found.</h3>;
    }

    const handleAddToCart = () => {
        addToCart(item, quantity);
    }

    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <input 
                type="number" 
                name="quantity" 
                id="quantity" 
                onChange={(e) => setQuantity(Number(e.target.value))}
                min='1'
                value={quantity}
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}