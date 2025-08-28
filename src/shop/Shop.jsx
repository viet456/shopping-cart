import { StoreItem } from "../storeItem/StoreItem";
import { Link } from "react-router-dom";
import { useFetchAllItems } from "../useFetchAllItems";
import styles from './Shop.module.css';

export function Shop() {
    const { items, loading, error } = useFetchAllItems();

    return (
        <section className={styles.shopGrid}>
            {error && <h3>Error: {error}</h3>}
            {loading && <h3>Loading</h3>}
            {items.map(item => (
                <div className={styles.shopItem}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            ))}
        </section>
    )
}