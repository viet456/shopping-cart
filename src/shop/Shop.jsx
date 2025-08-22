import { StoreItem } from "../storeItem/StoreItem";
import { Link } from "react-router-dom";

export function Shop() {
    return (
        <div> 
            <h3>Item</h3>
            <Link to='/storeItem'>Item Link</Link>
        </div>
    )
}