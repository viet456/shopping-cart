import { useItems } from "../ItemContext";
import { useParams } from "react-router-dom";

export function ItemPage() {
    // pulls the dynamic part of URL ('12' from /items/12)
    const { itemId } = useParams();

    const { items, loading, error } = useItems();

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
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}