import { Link } from "react-router-dom";
import { useFetchAllItems } from "../useFetchAllItems";
import styles from './Shop.module.css';
import { ItemCard } from "../itemCard/ItemCard";

export function Shop() {
    const { items, loading, error } = useFetchAllItems();

    return (
        <section className={styles.shopGrid}>
            {error && <h3>Error: {error}</h3>}
            {loading && <h3>Loading</h3>}
            {items.map(item => (
                <ItemCard
                    key={item.id}
                    item={item}/>
            ))}
        </section>
    )
}