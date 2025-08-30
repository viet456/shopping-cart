import { Link } from 'react-router-dom';
import styles from './itemCard.module.css';

export function ItemCard({ item }) {
    return (
        <Link to={`/items/${item.id}`}>
            <div className={styles.shopItem}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
            </div>
        </Link>

    )
}